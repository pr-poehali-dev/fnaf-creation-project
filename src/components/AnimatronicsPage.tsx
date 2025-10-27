import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface AnimatronicsPageProps {
  onBack: () => void;
}

type Animatronic = 'freddy' | 'bonnie' | 'chica' | 'foxy';

const animatronicsData = {
  freddy: {
    name: 'Freddy Fazbear',
    role: 'Лидер группы',
    description: 'Главный аниматроник и талисман пиццерии. Бурый медведь в цилиндре и бабочке. Активен на поздних стадиях ночи.',
    danger: 'Высокая',
    behavior: 'Передвигается только в темноте. Если камеры выключены слишком долго, появляется в вашем офисе.',
    emoji: '🐻',
  },
  bonnie: {
    name: 'Bonnie',
    role: 'Гитарист',
    description: 'Фиолетовый кролик с красной гитарой. Один из самых активных аниматроников.',
    danger: 'Очень высокая',
    behavior: 'Быстро передвигается по левой стороне здания. Часто появляется первым. Может отключить свет.',
    emoji: '🐰',
  },
  chica: {
    name: 'Chica',
    role: 'Бэк-вокалистка',
    description: 'Жёлтая курица с фартуком "Let\'s Eat!". Всегда носит с собой кекс.',
    danger: 'Высокая',
    behavior: 'Предпочитает правую сторону здания. Посещает кухню, создавая громкие звуки.',
    emoji: '🐔',
  },
  foxy: {
    name: 'Foxy',
    role: 'Пират',
    description: 'Ржавый лис-пират с повязкой на глазу и крюком. Скрывается за занавесом в Pirate Cove.',
    danger: 'Критическая',
    behavior: 'Не любит, когда на него смотрят слишком часто или редко. Бежит по коридору с огромной скоростью!',
    emoji: '🦊',
  },
};

const AnimatronicsPage = ({ onBack }: AnimatronicsPageProps) => {
  const [selected, setSelected] = useState<Animatronic>('freddy');
  const current = animatronicsData[selected];

  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-8 hover:bg-primary/20"
        >
          <Icon name="ArrowLeft" className="mr-2" />
          Назад
        </Button>
        
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-6xl text-primary text-center animate-flicker">
            Аниматроники
          </h1>
          
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {(Object.keys(animatronicsData) as Animatronic[]).map((key) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                  selected === key
                    ? 'bg-primary border-primary shadow-[0_0_30px_rgba(139,0,0,0.6)]'
                    : 'bg-card border-primary/30 hover:border-primary/60'
                }`}
              >
                <div className="text-6xl mb-2">{animatronicsData[key].emoji}</div>
                <div className="text-xl font-bold">{animatronicsData[key].name}</div>
                <div className="text-sm text-muted-foreground">{animatronicsData[key].role}</div>
              </button>
            ))}
          </div>
          
          <div className="bg-card/50 border-2 border-primary/30 p-8 rounded-lg backdrop-blur-sm">
            <div className="flex items-start gap-6">
              <div className="text-9xl animate-pulse">{current.emoji}</div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="text-4xl text-primary mb-2">{current.name}</h2>
                  <p className="text-xl text-foreground/60">{current.role}</p>
                </div>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {current.description}
                </p>
                
                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="AlertTriangle" className="text-destructive" size={24} />
                    <span className="text-lg">
                      <span className="text-muted-foreground">Уровень опасности:</span>{' '}
                      <span className="text-destructive font-bold">{current.danger}</span>
                    </span>
                  </div>
                  
                  <div className="bg-secondary/50 p-4 rounded border border-primary/20">
                    <div className="flex items-start gap-2">
                      <Icon name="Info" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="text-sm font-bold text-primary mb-1">Поведение:</p>
                        <p className="text-foreground/70">{current.behavior}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-destructive/20 border-2 border-destructive p-6 rounded-lg text-center">
            <p className="text-lg text-destructive-foreground">
              <Icon name="Skull" className="inline mr-2" size={24} />
              Если аниматроник доберётся до вашего офиса, у вас будет всего несколько секунд...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatronicsPage;
