'use client';

import { useState, useMemo } from 'react';
import { Search, BookOpen, Filter } from 'lucide-react';
import { bibleVerses, qaDatabase } from '@/data/qa-database';

export default function BibleVersesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'usage' | 'reference' | 'firstUsed'>('usage');

  const filteredVerses = useMemo(() => {
    const filtered = bibleVerses.filter(verse => 
      verse.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
      verse.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      verse.context.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'usage':
          return b.usageCount - a.usageCount;
        case 'reference':
          return a.reference.localeCompare(b.reference);
        case 'firstUsed':
          return new Date(a.firstUsed).getTime() - new Date(b.firstUsed).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, sortBy]);

  const getUsageInQA = (reference: string) => {
    return qaDatabase.filter(qa => qa.bibleVerses.includes(reference)).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Bible Verses Referenced by Charlie Kirk
              </h1>
              <p className="text-lg text-gray-600">
                234+ Bible Verses with Context, Usage Statistics, and Cross-References
              </p>
            </div>
            <div className="mt-4 lg:mt-0">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium text-green-800">
                    {filteredVerses.length} Verses Found
                  </span>
                </div>
                <div className="bg-blue-100 px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium text-blue-800">
                    {bibleVerses.reduce((sum, verse) => sum + verse.usageCount, 0)} Total References
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search Bible verses, text, or context..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'usage' | 'reference' | 'firstUsed')}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="usage">Sort by Usage</option>
                  <option value="reference">Sort by Reference</option>
                  <option value="firstUsed">Sort by First Used</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Bible Verses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredVerses.map((verse) => (
            <div key={verse.reference} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {verse.reference}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Used {verse.usageCount} times
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {getUsageInQA(verse.reference)} Q&A sessions
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <BookOpen className="h-5 w-5" />
                  </div>
                </div>

                {/* Verse Text */}
                <div className="mb-4">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <p className="text-gray-800 leading-relaxed italic">
                      &ldquo;{verse.text}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Context */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Context:</h4>
                  <p className="text-gray-700 text-sm">{verse.context}</p>
                </div>

                {/* Usage Statistics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600 mb-1">First Used</div>
                    <div className="font-semibold text-gray-900">{verse.firstUsed}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600 mb-1">Last Used</div>
                    <div className="font-semibold text-gray-900">{verse.lastUsed}</div>
                  </div>
                </div>

                {/* Q&A Sessions Using This Verse */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Used in Q&A Sessions:</h4>
                  <div className="space-y-2">
                    {qaDatabase
                      .filter(qa => qa.bibleVerses.includes(verse.reference))
                      .slice(0, 3)
                      .map(qa => (
                        <div key={qa.id} className="bg-blue-50 rounded-lg p-3">
                          <div className="text-sm font-medium text-blue-900 mb-1">
                            #{qa.id} - {qa.category}
                          </div>
                          <div className="text-xs text-blue-700 truncate">
                            {qa.question}
                          </div>
                          <div className="text-xs text-blue-600 mt-1">
                            {qa.platform} • {qa.date}
                          </div>
                        </div>
                      ))}
                    {getUsageInQA(verse.reference) > 3 && (
                      <div className="text-xs text-gray-500 text-center">
                        +{getUsageInQA(verse.reference) - 3} more sessions
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Summary */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bible Verse Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{bibleVerses.length}</div>
              <div className="text-sm text-gray-600">Total Verses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {bibleVerses.reduce((sum, verse) => sum + verse.usageCount, 0)}
              </div>
              <div className="text-sm text-gray-600">Total References</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {Math.round(bibleVerses.reduce((sum, verse) => sum + verse.usageCount, 0) / bibleVerses.length * 10) / 10}
              </div>
              <div className="text-sm text-gray-600">Avg Usage per Verse</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">
                {bibleVerses.filter(verse => verse.usageCount >= 10).length}
              </div>
              <div className="text-sm text-gray-600">Frequently Used (10+ times)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
