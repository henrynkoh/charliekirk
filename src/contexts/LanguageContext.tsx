'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.bible_verses': 'Bible Verses',
    'nav.statistics': 'Statistics',
    'nav.language': 'Language',
    
    // Main page
    'main.title': 'Charlie Kirk Q&A Archive',
    'main.subtitle': 'A comprehensive archive of religious Q&A sessions and biblical insights',
    'main.search_placeholder': 'Search Q&A sessions...',
    'main.filter_category': 'Category',
    'main.filter_platform': 'Platform',
    'main.filter_theme': 'Theological Theme',
    'main.filter_all': 'All',
    'main.results_count': 'Showing {count} of {total} Q&A sessions',
    'main.no_results': 'No Q&A sessions found matching your criteria.',
    'main.loading': 'Loading Q&A sessions...',
    'main.question': 'Question',
    'main.answer': 'Answer',
    'main.bible_verses': 'Bible Verses',
    'main.category': 'Category',
    'main.platform': 'Platform',
    'main.theme': 'Theme',
    'main.age_group': 'Age Group',
    'main.media_type': 'Media Type',
    'main.event_date': 'Event Date',
    'main.source': 'Source',
    'main.previous': 'Previous',
    'main.next': 'Next',
    'main.page': 'Page',
    'main.of': 'of',
    
    // Bible verses page
    'bible.title': 'Bible Verses Reference',
    'bible.subtitle': 'Biblical verses referenced in Charlie Kirk\'s Q&A sessions',
    'bible.search_placeholder': 'Search Bible verses...',
    'bible.total_verses': 'Total Bible Verses',
    'bible.unique_verses': 'Unique Verses',
    'bible.verse': 'Verse',
    'bible.usage_count': 'Usage Count',
    'bible.contexts': 'Contexts',
    'bible.no_results': 'No Bible verses found matching your search.',
    'bible.loading': 'Loading Bible verses...',
    
    // Statistics page
    'stats.title': 'Archive Statistics',
    'stats.subtitle': 'Analytics and insights from the Q&A archive',
    'stats.total_sessions': 'Total Q&A Sessions',
    'stats.unique_verses': 'Unique Bible Verses',
    'stats.categories': 'Categories',
    'stats.platforms': 'Platforms',
    'stats.themes': 'Theological Themes',
    'stats.top_categories': 'Top Categories',
    'stats.top_platforms': 'Top Platforms',
    'stats.top_themes': 'Top Theological Themes',
    'stats.verses_by_usage': 'Bible Verses by Usage',
    'stats.sessions_by_year': 'Sessions by Year',
    'stats.loading': 'Loading statistics...',
    
    // Footer
    'footer.copyright': 'Charlie Kirk Q&A Archive. All rights reserved.',
    
    // Categories
    'category.suffering_grief': 'Suffering and Grief',
    'category.american_founding': 'American Founding Principles',
    'category.personal_faith': 'Personal Faith Journey',
    'category.christian_apologetics': 'Christian Apologetics',
    'category.christian_nationalism': 'Christian Nationalism & Politics',
    'category.creation_origins': 'Theology of Creation & Origins',
    'category.biblical_authority': 'Biblical Authority & Reliability',
    'category.christian_living': 'Christian Living & Sanctification',
    'category.suffering_evil': 'Suffering, Evil & God\'s Nature',
    'category.social_issues': 'Social Issues from Biblical Perspective',
    'category.final_words': 'Final Words',
    
    // Platforms
    'platform.youtube': 'YouTube',
    'platform.instagram': 'Instagram',
    'platform.tiktok': 'TikTok',
    'platform.twitter': 'Twitter',
    'platform.facebook': 'Facebook',
    'platform.podcast': 'Podcast',
    'platform.live_stream': 'Live Stream',
    'platform.radio': 'Radio',
    'platform.television': 'Television',
    'platform.newsletter': 'Newsletter',
    'platform.website': 'Website',
    'platform.app': 'Mobile App',
    
    // Media types
    'media.video_qa': 'Video Q&A',
    'media.short_form': 'Short Form Video',
    'media.long_form': 'Long Form Video',
    'media.audio': 'Audio',
    'media.text': 'Text',
    'media.live': 'Live Stream',
    'media.podcast': 'Podcast',
    'media.newsletter': 'Newsletter',
    'media.social_media': 'Social Media',
    'media.interview': 'Interview',
    'media.sermon': 'Sermon',
    'media.lecture': 'Lecture',
    
    // Age groups
    'age.teenagers': 'Teenagers',
    'age.young_adults': 'Young Adults',
    'age.adults': 'Adults',
    'age.seniors': 'Seniors',
    'age.all_ages': 'All Ages',
    'age.families': 'Families',
    'age.students': 'Students',
    'age.parents': 'Parents',
    'age.professionals': 'Professionals',
    'age.seniors_plus': 'Seniors (65+)',
    
    // Theological themes
    'theme.suffering_presence': 'Suffering and God\'s Presence',
    'theme.creation_origins': 'Creation and Origins',
    'theme.biblical_authority': 'Biblical Authority',
    'theme.christian_living': 'Christian Living',
    'theme.apologetics': 'Christian Apologetics',
    'theme.politics_faith': 'Politics and Faith',
    'theme.social_issues': 'Social Issues',
    'theme.personal_growth': 'Personal Growth',
    'theme.community': 'Community and Fellowship',
    'theme.eschatology': 'Eschatology',
    'theme.salvation': 'Salvation and Redemption',
    'theme.holiness': 'Holiness and Sanctification'
  },
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.bible_verses': '성경 구절',
    'nav.statistics': '통계',
    'nav.language': '언어',
    
    // Main page
    'main.title': '찰리 커크 Q&A 아카이브',
    'main.subtitle': '종교적 Q&A 세션과 성경적 통찰의 포괄적인 아카이브',
    'main.search_placeholder': 'Q&A 세션 검색...',
    'main.filter_category': '카테고리',
    'main.filter_platform': '플랫폼',
    'main.filter_theme': '신학적 주제',
    'main.filter_all': '전체',
    'main.results_count': '{total}개 중 {count}개 Q&A 세션 표시',
    'main.no_results': '검색 조건에 맞는 Q&A 세션을 찾을 수 없습니다.',
    'main.loading': 'Q&A 세션을 불러오는 중...',
    'main.question': '질문',
    'main.answer': '답변',
    'main.bible_verses': '성경 구절',
    'main.category': '카테고리',
    'main.platform': '플랫폼',
    'main.theme': '주제',
    'main.age_group': '연령대',
    'main.media_type': '미디어 유형',
    'main.event_date': '이벤트 날짜',
    'main.source': '출처',
    'main.previous': '이전',
    'main.next': '다음',
    'main.page': '페이지',
    'main.of': '/',
    
    // Bible verses page
    'bible.title': '성경 구절 참조',
    'bible.subtitle': '찰리 커크의 Q&A 세션에서 참조된 성경 구절들',
    'bible.search_placeholder': '성경 구절 검색...',
    'bible.total_verses': '총 성경 구절',
    'bible.unique_verses': '고유 구절',
    'bible.verse': '구절',
    'bible.usage_count': '사용 횟수',
    'bible.contexts': '맥락',
    'bible.no_results': '검색 조건에 맞는 성경 구절을 찾을 수 없습니다.',
    'bible.loading': '성경 구절을 불러오는 중...',
    
    // Statistics page
    'stats.title': '아카이브 통계',
    'stats.subtitle': 'Q&A 아카이브의 분석 및 통찰',
    'stats.total_sessions': '총 Q&A 세션',
    'stats.unique_verses': '고유 성경 구절',
    'stats.categories': '카테고리',
    'stats.platforms': '플랫폼',
    'stats.themes': '신학적 주제',
    'stats.top_categories': '상위 카테고리',
    'stats.top_platforms': '상위 플랫폼',
    'stats.top_themes': '상위 신학적 주제',
    'stats.verses_by_usage': '사용량별 성경 구절',
    'stats.sessions_by_year': '연도별 세션',
    'stats.loading': '통계를 불러오는 중...',
    
    // Footer
    'footer.copyright': '찰리 커크 Q&A 아카이브. 모든 권리 보유.',
    
    // Categories
    'category.suffering_grief': '고통과 슬픔',
    'category.american_founding': '미국 건국 원칙',
    'category.personal_faith': '개인 신앙 여정',
    'category.christian_apologetics': '기독교 변증학',
    'category.christian_nationalism': '기독교 민족주의와 정치',
    'category.creation_origins': '창조와 기원의 신학',
    'category.biblical_authority': '성경의 권위와 신뢰성',
    'category.christian_living': '기독교 생활과 성화',
    'category.suffering_evil': '고통, 악과 하나님의 본성',
    'category.social_issues': '성경적 관점에서의 사회 문제',
    'category.final_words': '마지막 말씀',
    
    // Platforms
    'platform.youtube': '유튜브',
    'platform.instagram': '인스타그램',
    'platform.tiktok': '틱톡',
    'platform.twitter': '트위터',
    'platform.facebook': '페이스북',
    'platform.podcast': '팟캐스트',
    'platform.live_stream': '라이브 스트림',
    'platform.radio': '라디오',
    'platform.television': '텔레비전',
    'platform.newsletter': '뉴스레터',
    'platform.website': '웹사이트',
    'platform.app': '모바일 앱',
    
    // Media types
    'media.video_qa': '비디오 Q&A',
    'media.short_form': '짧은 형식 비디오',
    'media.long_form': '긴 형식 비디오',
    'media.audio': '오디오',
    'media.text': '텍스트',
    'media.live': '라이브 스트림',
    'media.podcast': '팟캐스트',
    'media.newsletter': '뉴스레터',
    'media.social_media': '소셜 미디어',
    'media.interview': '인터뷰',
    'media.sermon': '설교',
    'media.lecture': '강의',
    
    // Age groups
    'age.teenagers': '청소년',
    'age.young_adults': '청년',
    'age.adults': '성인',
    'age.seniors': '시니어',
    'age.all_ages': '전 연령',
    'age.families': '가족',
    'age.students': '학생',
    'age.parents': '부모',
    'age.professionals': '전문가',
    'age.seniors_plus': '시니어 (65세+)',
    
    // Theological themes
    'theme.suffering_presence': '고통과 하나님의 임재',
    'theme.creation_origins': '창조와 기원',
    'theme.biblical_authority': '성경의 권위',
    'theme.christian_living': '기독교 생활',
    'theme.apologetics': '기독교 변증학',
    'theme.politics_faith': '정치와 신앙',
    'theme.social_issues': '사회 문제',
    'theme.personal_growth': '개인 성장',
    'theme.community': '공동체와 교제',
    'theme.eschatology': '종말론',
    'theme.salvation': '구원과 구속',
    'theme.holiness': '성결과 성화'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load language preference from localStorage
    const savedLanguage = localStorage.getItem('charlie-kirk-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ko')) {
      setLanguage(savedLanguage);
    }
    setIsLoaded(true);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('charlie-kirk-language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  // Don't render until language is loaded to prevent hydration mismatch
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
