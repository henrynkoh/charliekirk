'use client';

import { useState, useEffect, useMemo } from 'react';
import { Search, Filter, BookOpen, Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { qaDatabase, bibleVerses, categories, platforms, mediaTypes, theologicalThemes } from '@/data/qa-database';
import { qaDatabaseKo, bibleVersesKo, categoriesKo, platformsKo, mediaTypesKo, theologicalThemesKo } from '@/data/qa-database-ko';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [selectedMediaType, setSelectedMediaType] = useState('');
  const [selectedTheologicalTheme, setSelectedTheologicalTheme] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedQA, setExpandedQA] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  // Get current language data
  const currentQADatabase = language === 'ko' ? qaDatabaseKo : qaDatabase;
  const currentBibleVerses = language === 'ko' ? bibleVersesKo : bibleVerses;
  const currentCategories = language === 'ko' ? categoriesKo : categories;
  const currentPlatforms = language === 'ko' ? platformsKo : platforms;
  const currentMediaTypes = language === 'ko' ? mediaTypesKo : mediaTypes;
  const currentTheologicalThemes = language === 'ko' ? theologicalThemesKo : theologicalThemes;

  // Filter and search logic
  const filteredQA = useMemo(() => {
    return currentQADatabase.filter(qa => {
      const matchesSearch = searchTerm === '' || 
        qa.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        qa.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        qa.bibleVerses.some(verse => verse.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === '' || qa.category === selectedCategory;
      const matchesPlatform = selectedPlatform === '' || qa.platform === selectedPlatform;
      const matchesMediaType = selectedMediaType === '' || qa.mediaType === selectedMediaType;
      const matchesTheologicalTheme = selectedTheologicalTheme === '' || qa.theologicalTheme === selectedTheologicalTheme;

      return matchesSearch && matchesCategory && matchesPlatform && matchesMediaType && matchesTheologicalTheme;
    });
  }, [searchTerm, selectedCategory, selectedPlatform, selectedMediaType, selectedTheologicalTheme, currentQADatabase]);

  // Pagination
  const totalPages = Math.ceil(filteredQA.length / itemsPerPage);
  const paginatedQA = filteredQA.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Bible verse lookup
  const getBibleVerse = (reference: string) => {
    return currentBibleVerses.find(verse => verse.reference === reference);
  };

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedPlatform, selectedMediaType, selectedTheologicalTheme]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {t('main.title')}
              </h1>
              <p className="text-lg text-gray-600">
                {t('main.subtitle')}
              </p>
            </div>
            <div className="mt-4 lg:mt-0">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium text-blue-800">
                    {t('main.results_count').replace('{count}', filteredQA.length.toString()).replace('{total}', currentQADatabase.length.toString())}
                  </span>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium text-green-800">
                    {currentBibleVerses.length} {t('bible.unique_verses')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder={t('main.search_placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filter Toggle */}
          <div className="mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              <Filter className="h-5 w-5" />
              <span>{t('main.filter_category')}</span>
              {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('main.filter_category')}</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">{t('main.filter_all')} {t('main.filter_category')}</option>
                  {currentCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('main.filter_platform')}</label>
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">{t('main.filter_all')} {t('main.filter_platform')}</option>
                  {currentPlatforms.map(platform => (
                    <option key={platform} value={platform}>{platform}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('main.media_type')}</label>
                <select
                  value={selectedMediaType}
                  onChange={(e) => setSelectedMediaType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">{t('main.filter_all')} {t('main.media_type')}</option>
                  {currentMediaTypes.map(mediaType => (
                    <option key={mediaType} value={mediaType}>{mediaType}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('main.filter_theme')}</label>
                <select
                  value={selectedTheologicalTheme}
                  onChange={(e) => setSelectedTheologicalTheme(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">{t('main.filter_all')} {t('main.filter_theme')}</option>
                  {currentTheologicalThemes.map(theme => (
                    <option key={theme} value={theme}>{theme}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Clear Filters */}
          {(selectedCategory || selectedPlatform || selectedMediaType || selectedTheologicalTheme) && (
            <div className="mb-6">
              <button
                onClick={() => {
                  setSelectedCategory('');
                  setSelectedPlatform('');
                  setSelectedMediaType('');
                  setSelectedTheologicalTheme('');
                }}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
{t('main.filter_all')} 필터 지우기
              </button>
            </div>
          )}
        </div>

        {/* Q&A List */}
        <div className="space-y-6">
          {paginatedQA.map((qa) => (
            <div key={qa.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        #{qa.id}
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {qa.category}
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {qa.platform}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {qa.question}
                    </h3>
                  </div>
                  <button
                    onClick={() => setExpandedQA(expandedQA === qa.id ? null : qa.id)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {expandedQA === qa.id ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </button>
                </div>

                {/* Answer Preview */}
                <div className="text-gray-700 mb-4">
                  {qa.answer.length > 200 ? `${qa.answer.substring(0, 200)}...` : qa.answer}
                </div>

                {/* Bible Verses */}
                {qa.bibleVerses.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">Bible Verses Referenced:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {qa.bibleVerses.map((verse, index) => {
                        const bibleVerse = getBibleVerse(verse);
                        return (
                          <div key={index} className="group relative">
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded cursor-pointer hover:bg-yellow-200">
                              {verse}
                            </span>
                            {bibleVerse && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80 bg-gray-900 text-white text-xs rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                                <div className="font-semibold mb-1">{bibleVerse.reference}</div>
                                <div className="mb-2">{bibleVerse.text}</div>
                                <div className="text-gray-300 text-xs">
                                  Context: {bibleVerse.context} • Used {bibleVerse.usageCount} times
                                </div>
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{qa.date}</span>
                  </div>
                  {qa.location && (
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{qa.location}</span>
                    </div>
                  )}
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {qa.mediaType}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {qa.ageGroup}
                  </span>
                </div>

                {/* Expanded Content */}
                {expandedQA === qa.id && (
                  <div className="border-t pt-4 mt-4">
                    <div className="space-y-4">
                      {/* Full Answer */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Complete Answer:</h4>
                        <p className="text-gray-700 leading-relaxed">{qa.answer}</p>
                      </div>

                      {/* Detailed Bible Verses */}
                      {qa.bibleVerses.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Detailed Bible References:</h4>
                          <div className="space-y-3">
                            {qa.bibleVerses.map((verse, index) => {
                              const bibleVerse = getBibleVerse(verse);
                              return (
                                <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                  <div className="font-semibold text-yellow-800 mb-2">{verse}</div>
                                  {bibleVerse && (
                                    <>
                                      <div className="text-gray-700 mb-2">{bibleVerse.text}</div>
                                      <div className="text-sm text-gray-600">
                                        <strong>Context:</strong> {bibleVerse.context}
                                      </div>
                                      <div className="text-sm text-gray-600">
                                        <strong>Usage:</strong> Referenced {bibleVerse.usageCount} times
                                      </div>
                                      <div className="text-sm text-gray-600">
                                        <strong>First Used:</strong> {bibleVerse.firstUsed} • <strong>Last Used:</strong> {bibleVerse.lastUsed}
                                      </div>
                                    </>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Additional Metadata */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Theological Theme:</h4>
                          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">
                            {qa.theologicalTheme}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Subcategory:</h4>
                          <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded">
                            {qa.subcategory}
                          </span>
                        </div>
                      </div>

                      {/* Source Link */}
                      {qa.source && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Source:</h4>
                          <a
                            href={qa.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 underline"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span>View Original Source</span>
                          </a>
                        </div>
                      )}

                      {/* Timestamp */}
                      {qa.timestamp && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Timestamp:</h4>
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded">
                            {qa.timestamp}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              <div className="flex items-center space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page = i + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 text-sm font-medium rounded-md ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Footer Stats */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{qaDatabase.length}</div>
              <div className="text-sm text-gray-600">Total Q&A Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{bibleVerses.length}</div>
              <div className="text-sm text-gray-600">Bible Verses Referenced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{categories.length}</div>
              <div className="text-sm text-gray-600">Categories Covered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
