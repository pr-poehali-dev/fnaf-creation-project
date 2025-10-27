import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface GamePageProps {
  onBack: () => void;
}

type Camera = 'stage' | 'dining' | 'pirate' | 'hallLeft' | 'hallRight' | 'office';
type Door = 'left' | 'right';

const GamePage = ({ onBack }: GamePageProps) => {
  const [power, setPower] = useState(100);
  const [time, setTime] = useState(0);
  const [camera, setCamera] = useState<Camera>('office');
  const [cameraOpen, setCameraOpen] = useState(false);
  const [leftDoor, setLeftDoor] = useState(false);
  const [rightDoor, setRightDoor] = useState(false);
  const [leftLight, setLeftLight] = useState(false);
  const [rightLight, setRightLight] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [survived, setSurvived] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (gameOver || survived) return;

    const powerDrain = setInterval(() => {
      let drain = 1;
      if (cameraOpen) drain += 1;
      if (leftDoor) drain += 1;
      if (rightDoor) drain += 1;
      if (leftLight) drain += 1;
      if (rightLight) drain += 1;

      setPower((prev) => {
        const newPower = Math.max(0, prev - drain);
        if (newPower === 0) {
          setGameOver(true);
          toast({
            title: '💀 Электричество закончилось',
            description: 'Freddy идёт за вами...',
            variant: 'destructive',
          });
        }
        return newPower;
      });
    }, 1000);

    return () => clearInterval(powerDrain);
  }, [cameraOpen, leftDoor, rightDoor, leftLight, rightLight, gameOver, survived, toast]);

  useEffect(() => {
    if (gameOver || survived) return;

    const timeProgress = setInterval(() => {
      setTime((prev) => {
        const newTime = prev + 1;
        if (newTime >= 360) {
          setSurvived(true);
          toast({
            title: '🎉 6 AM - Вы выжили!',
            description: 'Ночь пройдена! Поздравляем!',
          });
        }
        return newTime;
      });
    }, 100);

    return () => clearInterval(timeProgress);
  }, [gameOver, survived, toast]);

  const toggleDoor = (door: Door) => {
    if (door === 'left') setLeftDoor(!leftDoor);
    else setRightDoor(!rightDoor);
  };

  const toggleLight = (side: Door) => {
    if (side === 'left') {
      setLeftLight(!leftLight);
      setTimeout(() => setLeftLight(false), 500);
    } else {
      setRightLight(!rightLight);
      setTimeout(() => setRightLight(false), 500);
    }
  };

  const getCurrentHour = () => {
    return Math.floor(time / 60);
  };

  const cameraViews = {
    office: { name: 'Офис охраны', emoji: '🏢' },
    stage: { name: 'Сцена', emoji: '🎭' },
    dining: { name: 'Столовая', emoji: '🍕' },
    pirate: { name: 'Pirate Cove', emoji: '🏴‍☠️' },
    hallLeft: { name: 'Левый коридор', emoji: '⬅️' },
    hallRight: { name: 'Правый коридор', emoji: '➡️' },
  };

  if (gameOver) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="text-9xl animate-glitch">💀</div>
          <h1 className="text-6xl text-destructive animate-pulse">GAME OVER</h1>
          <p className="text-2xl text-foreground/60">
            Вы не дожили до {getCurrentHour() + 1} AM
          </p>
          <Button onClick={onBack} className="text-xl px-8 py-6">
            Вернуться в меню
          </Button>
        </div>
      </div>
    );
  }

  if (survived) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/20 to-black">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="text-9xl">🌅</div>
          <h1 className="text-6xl text-primary animate-flicker">6 AM</h1>
          <p className="text-3xl text-foreground">Поздравляем! Вы пережили ночь!</p>
          <div className="text-xl text-foreground/60">
            Осталось энергии: {power}%
          </div>
          <Button onClick={onBack} className="text-xl px-8 py-6">
            Вернуться в меню
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-foreground relative">
      <div className="absolute top-4 left-4 z-50 space-y-2">
        <Button onClick={onBack} variant="ghost" size="sm">
          <Icon name="ArrowLeft" className="mr-2" size={16} />
          Выход
        </Button>
        <div className="bg-card/90 p-3 rounded border border-primary/30 space-y-1">
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={20} className="text-primary" />
            <span className="text-xl font-bold">{getCurrentHour()} AM</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={20} className={power < 20 ? 'text-destructive animate-pulse' : 'text-primary'} />
            <span className={power < 20 ? 'text-destructive font-bold' : ''}>{power}%</span>
          </div>
        </div>
      </div>

      {!cameraOpen && (
        <div className="relative h-screen flex items-center justify-center">
          <div className="text-9xl animate-pulse">🏢</div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl text-primary">⬅️ Левая дверь</h3>
                <div className="flex gap-4">
                  <Button
                    onClick={() => toggleDoor('left')}
                    className={leftDoor ? 'bg-primary' : 'bg-card'}
                  >
                    <Icon name={leftDoor ? 'DoorClosed' : 'DoorOpen'} className="mr-2" />
                    {leftDoor ? 'Открыть' : 'Закрыть'}
                  </Button>
                  <Button
                    onClick={() => toggleLight('left')}
                    className={leftLight ? 'bg-yellow-500' : 'bg-card'}
                  >
                    <Icon name="Lightbulb" className="mr-2" />
                    Свет
                  </Button>
                </div>
                {leftLight && (
                  <div className="bg-yellow-500/20 p-4 rounded border border-yellow-500">
                    <p className="text-yellow-200">Всё чисто</p>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl text-primary">Правая дверь ➡️</h3>
                <div className="flex gap-4">
                  <Button
                    onClick={() => toggleDoor('right')}
                    className={rightDoor ? 'bg-primary' : 'bg-card'}
                  >
                    <Icon name={rightDoor ? 'DoorClosed' : 'DoorOpen'} className="mr-2" />
                    {rightDoor ? 'Открыть' : 'Закрыть'}
                  </Button>
                  <Button
                    onClick={() => toggleLight('right')}
                    className={rightLight ? 'bg-yellow-500' : 'bg-card'}
                  >
                    <Icon name="Lightbulb" className="mr-2" />
                    Свет
                  </Button>
                </div>
                {rightLight && (
                  <div className="bg-yellow-500/20 p-4 rounded border border-yellow-500">
                    <p className="text-yellow-200">Всё чисто</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {cameraOpen && (
        <div className="h-screen flex flex-col">
          <div className="flex-1 bg-secondary/30 flex items-center justify-center relative">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="text-9xl">{cameraViews[camera].emoji}</div>
              <h2 className="text-4xl text-primary animate-flicker">{cameraViews[camera].name}</h2>
              <div className="text-destructive animate-pulse">
                <Icon name="Video" size={32} className="inline" />
              </div>
            </div>
            
            <div className="absolute top-4 left-4 bg-destructive/80 px-4 py-2 rounded font-mono">
              REC
            </div>
          </div>
          
          <div className="bg-card/95 p-6 border-t-2 border-primary/30">
            <div className="grid grid-cols-3 gap-3">
              {(Object.keys(cameraViews) as Camera[]).map((cam) => (
                <button
                  key={cam}
                  onClick={() => setCamera(cam)}
                  className={`p-4 rounded border-2 transition-all ${
                    camera === cam
                      ? 'bg-primary border-primary'
                      : 'bg-secondary border-primary/30 hover:border-primary/60'
                  }`}
                >
                  <div className="text-3xl mb-1">{cameraViews[cam].emoji}</div>
                  <div className="text-sm">{cameraViews[cam].name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setCameraOpen(!cameraOpen)}
          size="lg"
          className="h-16 text-xl"
        >
          <Icon name={cameraOpen ? 'Monitor' : 'Video'} className="mr-2" size={24} />
          {cameraOpen ? 'Закрыть камеры' : 'Открыть камеры'}
        </Button>
      </div>
    </div>
  );
};

export default GamePage;
