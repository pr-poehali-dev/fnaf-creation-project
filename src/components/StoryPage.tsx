import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface StoryPageProps {
  onBack: () => void;
}

const StoryPage = ({ onBack }: StoryPageProps) => {
  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
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
            История
          </h1>
          
          <div className="bg-card/50 border-2 border-primary/30 p-8 rounded-lg space-y-6 backdrop-blur-sm">
            <div className="space-y-4">
              <h2 className="text-3xl text-primary">Добро пожаловать в Freddy Fazbear's Pizza!</h2>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Семейная пиццерия, где фантазия и веселье оживают! Однако за яркими огнями и детским смехом 
                скрывается темная тайна...
              </p>
            </div>
            
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl text-primary/90">Ночная смена</h3>
              <p className="text-foreground/70 leading-relaxed">
                Вы новый охранник на ночной смене. Вам предстоит проработать пять ночей с полуночи до 6 утра. 
                Задача проста — следить за камерами безопасности и убедиться, что всё в порядке.
              </p>
            </div>
            
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl text-primary/90">Аниматроники</h3>
              <p className="text-foreground/70 leading-relaxed">
                Четыре аниматронных персонажа развлекают детей днём. Но ночью... ночью они становятся активными. 
                Их программное обеспечение даёт сбой, и они начинают бродить по зданию.
              </p>
              <p className="text-destructive font-semibold animate-pulse">
                Они считают вас эндоскелетом без костюма и попытаются "исправить" это...
              </p>
            </div>
            
            <div className="space-y-4 pt-4 border-t-2 border-primary/20">
              <h3 className="text-2xl text-primary/90">Что случилось?</h3>
              <p className="text-foreground/70 leading-relaxed">
                Летом 1987 года произошёл инцидент. Подробности засекречены. Но с тех пор аниматроники 
                ведут себя... странно. Особенно ночью.
              </p>
              <p className="text-foreground/60 italic">
                Прошлый охранник перешёл на дневную смену после первой же недели. Интересно, почему?
              </p>
            </div>
          </div>
          
          <div className="bg-destructive/20 border-2 border-destructive p-6 rounded-lg text-center">
            <p className="text-xl text-destructive-foreground">
              <Icon name="AlertTriangle" className="inline mr-2" size={24} />
              Помните: электричество ограничено. Используйте его с умом.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
