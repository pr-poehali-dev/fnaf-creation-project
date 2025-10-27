import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function App() {
  const [showJumpscare, setShowJumpscare] = useState(false);
  const [activeCamera, setActiveCamera] = useState(1);
  const [power, setPower] = useState(100);

  const animatronics = [
    {
      name: 'Фредди Фазбер',
      description: 'Главный аниматроник пиццерии. Коричневый медведь с микрофоном и цилиндром.',
      danger: 'Очень высокая',
      location: 'Зал',
    },
    {
      name: 'Бонни',
      description: 'Фиолетовый кролик с гитарой. Первый, кто начинает двигаться.',
      danger: 'Высокая',
      location: 'Коридор слева',
    },
    {
      name: 'Чика',
      description: 'Жёлтая курица с кексом. Агрессивна после полуночи.',
      danger: 'Высокая',
      location: 'Кухня',
    },
    {
      name: 'Фокси',
      description: 'Рыжий лис-пират. Самый быстрый аниматроник.',
      danger: 'Критическая',
      location: 'Пиратская бухта',
    },
  ];

  const handleJumpscare = () => {
    setShowJumpscare(true);
    setTimeout(() => setShowJumpscare(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-foreground relative overflow-hidden">
      {showJumpscare && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black animate-glitch">
          <div className="text-9xl font-bold text-destructive animate-pulse">
            👹
          </div>
        </div>
      )}

      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-destructive/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-7xl md:text-9xl mb-4 text-primary animate-flicker drop-shadow-[0_0_30px_rgba(139,0,0,0.8)]">
            FREDDY'S
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground tracking-widest">
            FIVE NIGHTS AT FREDDY'S
          </p>
          <p className="text-sm mt-2 text-destructive">
            🔋 SURVIVE UNTIL 6 AM 🔋
          </p>
        </header>

        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8 bg-card/50 backdrop-blur">
            <TabsTrigger value="home" className="data-[state=active]:bg-destructive">
              <Icon name="Home" size={20} className="mr-2" />
              Главная
            </TabsTrigger>
            <TabsTrigger value="story" className="data-[state=active]:bg-destructive">
              <Icon name="BookOpen" size={20} className="mr-2" />
              История
            </TabsTrigger>
            <TabsTrigger value="animatronics" className="data-[state=active]:bg-destructive">
              <Icon name="User" size={20} className="mr-2" />
              Аниматроники
            </TabsTrigger>
            <TabsTrigger value="game" className="data-[state=active]:bg-destructive">
              <Icon name="Gamepad2" size={20} className="mr-2" />
              Игра
            </TabsTrigger>
            <TabsTrigger value="rules" className="data-[state=active]:bg-destructive">
              <Icon name="ScrollText" size={20} className="mr-2" />
              Правила
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-destructive">
              <Icon name="Trophy" size={20} className="mr-2" />
              Достижения
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="animate-fade-in">
            <Card className="p-8 bg-card/80 backdrop-blur border-destructive/30">
              <div className="text-center space-y-6">
                <h2 className="text-5xl mb-4">Добро пожаловать в пиццерию!</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Добро пожаловать в Freddy Fazbear's Pizza - место, где веселье и еда сочетаются уже 30 лет!
                  Наши аниматроники готовы развлекать вас днём и ночью...
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <Card className="p-6 bg-secondary/50 border-destructive/20 hover:border-destructive transition-all">
                    <Icon name="Clock" size={48} className="mx-auto mb-4 text-primary" />
                    <h3 className="text-2xl mb-2">12:00 AM - 6:00 AM</h3>
                    <p className="text-muted-foreground">Ночная смена охранника</p>
                  </Card>
                  <Card className="p-6 bg-secondary/50 border-destructive/20 hover:border-destructive transition-all">
                    <Icon name="Zap" size={48} className="mx-auto mb-4 text-primary" />
                    <h3 className="text-2xl mb-2">Ограниченная энергия</h3>
                    <p className="text-muted-foreground">Используйте ресурсы с умом</p>
                  </Card>
                  <Card className="p-6 bg-secondary/50 border-destructive/20 hover:border-destructive transition-all">
                    <Icon name="Camera" size={48} className="mx-auto mb-4 text-primary" />
                    <h3 className="text-2xl mb-2">11 камер наблюдения</h3>
                    <p className="text-muted-foreground">Следите за движением</p>
                  </Card>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="story" className="animate-fade-in">
            <Card className="p-8 bg-card/80 backdrop-blur border-destructive/30">
              <h2 className="text-5xl mb-6">История пиццерии</h2>
              <div className="space-y-6 text-lg">
                <p className="text-muted-foreground leading-relaxed">
                  Freddy Fazbear's Pizza открылась в 1983 году как семейный ресторан с уникальными
                  аниматрониками-певцами. Основатели хотели создать место, где дети могли бы весело
                  проводить время с любимыми персонажами.
                </p>
                <p className="text-destructive font-bold">
                  ⚠️ Однако вскоре начали происходить странные события...
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  В 1987 году произошёл инцидент, известный как "Укус 87-го". Один из аниматроников
                  напал на посетителя при свете дня. После этого аниматроникам запретили свободно
                  передвигаться днём.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ночные охранники начали замечать, что аниматроники активируются после закрытия и
                  бродят по зданию. Официальная версия гласит, что это режим свободного передвижения
                  для предотвращения блокировки сервоприводов.
                </p>
                <p className="text-destructive font-bold">
                  Но истина гораздо страшнее...
                </p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="animatronics" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {animatronics.map((animatronic, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/80 backdrop-blur border-destructive/30 hover:border-destructive transition-all hover:animate-pulse-red cursor-pointer"
                  onClick={() => index === 3 && handleJumpscare()}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-6xl">
                      {index === 0 ? '🐻' : index === 1 ? '🐰' : index === 2 ? '🐔' : '🦊'}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl mb-2">{animatronic.name}</h3>
                      <p className="text-muted-foreground mb-3">{animatronic.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-primary">Опасность:</span>{' '}
                          <span className="text-destructive font-bold">{animatronic.danger}</span>
                        </div>
                        <div>
                          <span className="text-primary">Локация:</span>{' '}
                          <span>{animatronic.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="game" className="animate-fade-in">
            <Card className="p-8 bg-card/80 backdrop-blur border-destructive/30">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-4xl">Офис охранника</h2>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Энергия</p>
                    <p className="text-2xl font-bold text-primary">{power}%</p>
                  </div>
                  <Icon name="Zap" size={32} className="text-primary animate-flicker" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((cam) => (
                  <Button
                    key={cam}
                    variant={activeCamera === cam ? 'destructive' : 'secondary'}
                    className="h-24 text-lg"
                    onClick={() => {
                      setActiveCamera(cam);
                      setPower((p) => Math.max(0, p - 2));
                    }}
                  >
                    <Icon name="Camera" size={24} className="mr-2" />
                    CAM {cam}
                  </Button>
                ))}
              </div>

              <Card className="p-6 bg-secondary/50 border-destructive/20 h-64 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
                <div className="text-center z-10">
                  <p className="text-4xl mb-2 animate-flicker">📹</p>
                  <p className="text-xl">КАМЕРА {activeCamera}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {activeCamera === 1 && 'Главный зал - Пусто'}
                    {activeCamera === 2 && 'Коридор - Бонни замечен!'}
                    {activeCamera === 3 && 'Кухня - Статические помехи'}
                    {activeCamera === 4 && 'Пиратская бухта - Фокси готовится!'}
                    {activeCamera === 5 && 'Коридор справа - Чистый'}
                    {activeCamera === 6 && 'Коридор слева - Подозрительно тихо'}
                    {activeCamera === 7 && 'Туалеты - Пусто'}
                    {activeCamera === 8 && 'Кладовая - Странные звуки'}
                    {activeCamera === 9 && 'Сцена - Фредди исчез!'}
                  </p>
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <Button
                  variant="destructive"
                  size="lg"
                  onClick={() => {
                    setPower((p) => Math.max(0, p - 5));
                    handleJumpscare();
                  }}
                >
                  <Icon name="DoorClosed" size={24} className="mr-2" />
                  Левая дверь
                </Button>
                <Button
                  variant="destructive"
                  size="lg"
                  onClick={() => {
                    setPower((p) => Math.max(0, p - 5));
                    handleJumpscare();
                  }}
                >
                  <Icon name="DoorClosed" size={24} className="mr-2" />
                  Правая дверь
                </Button>
              </div>

              {power === 0 && (
                <div className="mt-6 p-4 bg-destructive/20 border border-destructive rounded-lg text-center animate-flicker">
                  <p className="text-xl text-destructive font-bold">⚠️ ЭНЕРГИЯ ЗАКОНЧИЛАСЬ ⚠️</p>
                  <p className="text-muted-foreground">Фредди идёт...</p>
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="rules" className="animate-fade-in">
            <Card className="p-8 bg-card/80 backdrop-blur border-destructive/30">
              <h2 className="text-5xl mb-6">Правила выживания</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: 'Clock',
                    title: 'Смена: 12:00 AM - 6:00 AM',
                    desc: 'Продержитесь 6 часов до рассвета',
                  },
                  {
                    icon: 'Zap',
                    title: 'Ограниченная энергия',
                    desc: 'У вас только 100% энергии на всю ночь. Двери и камеры расходуют её.',
                  },
                  {
                    icon: 'Camera',
                    title: 'Следите за камерами',
                    desc: 'Используйте 11 камер наблюдения, чтобы отслеживать аниматроников.',
                  },
                  {
                    icon: 'DoorClosed',
                    title: 'Закрывайте двери',
                    desc: 'Две двери защищают вас, но потребляют много энергии.',
                  },
                  {
                    icon: 'Lightbulb',
                    title: 'Используйте свет',
                    desc: 'Проверяйте коридоры светом перед закрытием дверей.',
                  },
                  {
                    icon: 'Volume2',
                    title: 'Слушайте звуки',
                    desc: 'Шаги, скрип и другие звуки предупредят вас об опасности.',
                  },
                  {
                    icon: 'AlertTriangle',
                    title: 'Не оставайтесь без энергии',
                    desc: 'Если энергия закончится, вы беззащитны перед Фредди.',
                  },
                  {
                    icon: 'Eye',
                    title: 'Не смотрите слишком долго',
                    desc: 'Длительное наблюдение расходует энергию быстрее.',
                  },
                ].map((rule, index) => (
                  <Card
                    key={index}
                    className="p-4 bg-secondary/50 border-destructive/20 hover:border-destructive transition-all flex items-start gap-4"
                  >
                    <Icon name={rule.icon as any} size={32} className="text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl mb-1">{rule.title}</h3>
                      <p className="text-muted-foreground">{rule.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Первая ночь', desc: 'Переживите первую смену', icon: '🌙', unlocked: true },
                { name: 'Мастер камер', desc: 'Проверьте все камеры за одну ночь', icon: '📹', unlocked: true },
                { name: 'Экономия энергии', desc: 'Закончите ночь с 50%+ энергии', icon: '🔋', unlocked: false },
                { name: 'Выживший', desc: 'Переживите 5 ночей подряд', icon: '🏆', unlocked: false },
                { name: 'Без камер', desc: 'Выживите не используя камеры', icon: '🙈', unlocked: false },
                { name: 'Идеальная ночь', desc: 'Закончите со 100% энергии', icon: '⚡', unlocked: false },
              ].map((achievement, index) => (
                <Card
                  key={index}
                  className={`p-6 border-destructive/30 ${
                    achievement.unlocked
                      ? 'bg-destructive/20 border-destructive'
                      : 'bg-card/50 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-1">{achievement.name}</h3>
                      <p className="text-muted-foreground">{achievement.desc}</p>
                      <p className="text-sm mt-2 text-primary font-bold">
                        {achievement.unlocked ? '✓ Разблокировано' : '🔒 Заблокировано'}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <footer className="mt-12 text-center text-muted-foreground text-sm animate-flicker">
          <p>⚠️ Freddy Fazbear's Pizza не несёт ответственности за травмы или исчезновения ⚠️</p>
          <p className="mt-2">© 1983-2025 Fazbear Entertainment Inc.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
