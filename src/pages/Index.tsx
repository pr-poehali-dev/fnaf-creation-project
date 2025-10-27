import { useState } from 'react';
import MainMenu from '@/components/MainMenu';
import StoryPage from '@/components/StoryPage';
import AnimatronicsPage from '@/components/AnimatronicsPage';
import GamePage from '@/components/GamePage';
import RulesPage from '@/components/RulesPage';
import AchievementsPage from '@/components/AchievementsPage';

type Page = 'main' | 'story' | 'animatronics' | 'game' | 'rules' | 'achievements';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('main');

  const renderPage = () => {
    switch (currentPage) {
      case 'main':
        return <MainMenu onNavigate={setCurrentPage} />;
      case 'story':
        return <StoryPage onBack={() => setCurrentPage('main')} />;
      case 'animatronics':
        return <AnimatronicsPage onBack={() => setCurrentPage('main')} />;
      case 'game':
        return <GamePage onBack={() => setCurrentPage('main')} />;
      case 'rules':
        return <RulesPage onBack={() => setCurrentPage('main')} />;
      case 'achievements':
        return <AchievementsPage onBack={() => setCurrentPage('main')} />;
      default:
        return <MainMenu onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderPage()}
    </div>
  );
};

export default Index;
