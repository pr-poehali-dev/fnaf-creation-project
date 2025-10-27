import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

type Page = 'main' | 'story' | 'animatronics' | 'game' | 'rules' | 'achievements';

interface MainMenuProps {
  onNavigate: (page: Page) => void;
}

const MainMenu = ({ onNavigate }: MainMenuProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black"></div>
      
      <div className="relative z-10 text-center space-y-8 animate-fade-in">
        <h1 className="text-7xl md:text-9xl text-primary animate-flicker drop-shadow-[0_0_30px_rgba(139,0,0,0.8)]">
          FIVE NIGHTS AT
        </h1>
        <h2 className="text-6xl md:text-8xl text-primary animate-flicker drop-shadow-[0_0_30px_rgba(139,0,0,0.8)]">
          FREDDY'S
        </h2>
        
        <div className="pt-8 space-y-4">
          <MenuButton onClick={() => onNavigate('game')} icon="Gamepad2">
            Играть
          </MenuButton>
          <MenuButton onClick={() => onNavigate('story')} icon="BookOpen">
            История
          </MenuButton>
          <MenuButton onClick={() => onNavigate('animatronics')} icon="Ghost">
            Аниматроники
          </MenuButton>
          <MenuButton onClick={() => onNavigate('rules')} icon="ScrollText">
            Правила
          </MenuButton>
          <MenuButton onClick={() => onNavigate('achievements')} icon="Trophy">
            Достижения
          </MenuButton>
        </div>
      </div>
      
      <div className="absolute bottom-4 text-muted-foreground text-sm animate-pulse">
        <p>Наденьте наушники для полного погружения</p>
      </div>
    </div>
  );
};

interface MenuButtonProps {
  onClick: () => void;
  icon: string;
  children: React.ReactNode;
}

const MenuButton = ({ onClick, icon, children }: MenuButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="w-80 h-16 text-2xl bg-card hover:bg-primary/80 border-2 border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,0,0,0.6)] group"
    >
      <Icon name={icon} className="mr-3 group-hover:animate-pulse" size={28} />
      {children}
    </Button>
  );
};

export default MainMenu;
