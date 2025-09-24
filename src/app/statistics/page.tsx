'use client';

import { useMemo } from 'react';
import { BarChart3, TrendingUp, BookOpen, MessageSquare } from 'lucide-react';
import { qaDatabase, bibleVerses } from '@/data/qa-database';

export default function StatisticsPage() {
  const stats = useMemo(() => {
    // Category distribution
    const categoryStats = qaDatabase.reduce((acc, qa) => {
      acc[qa.category] = (acc[qa.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Platform distribution
    const platformStats = qaDatabase.reduce((acc, qa) => {
      acc[qa.platform] = (acc[qa.platform] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Media type distribution
    const mediaTypeStats = qaDatabase.reduce((acc, qa) => {
      acc[qa.mediaType] = (acc[qa.mediaType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Theological theme distribution
    const themeStats = qaDatabase.reduce((acc, qa) => {
      acc[qa.theologicalTheme] = (acc[qa.theologicalTheme] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Bible verse usage
    const verseUsageStats = bibleVerses
      .sort((a, b) => b.usageCount - a.usageCount)
      .slice(0, 10);

    // Timeline data
    const timelineData = qaDatabase.reduce((acc, qa) => {
      const year = qa.date.split('-')[0];
      acc[year] = (acc[year] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Age group distribution
    const ageGroupStats = qaDatabase.reduce((acc, qa) => {
      acc[qa.ageGroup] = (acc[qa.ageGroup] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Bible verses per Q&A
    const versesPerQA = qaDatabase.map(qa => qa.bibleVerses.length);
    const avgVersesPerQA = versesPerQA.reduce((sum, count) => sum + count, 0) / versesPerQA.length;

    return {
      categoryStats,
      platformStats,
      mediaTypeStats,
      themeStats,
      verseUsageStats,
      timelineData,
      ageGroupStats,
      avgVersesPerQA,
      totalQA: qaDatabase.length,
      totalVerses: bibleVerses.length,
      totalReferences: bibleVerses.reduce((sum, verse) => sum + verse.usageCount, 0)
    };
  }, []);

  const StatCard = ({ title, value, icon: Icon, color = 'blue' }: {
    title: string;
    value: string | number;
    icon: typeof BarChart3;
    color?: string;
  }) => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-3xl font-bold text-${color}-600`}>{value}</p>
        </div>
        <Icon className={`h-8 w-8 text-${color}-600`} />
      </div>
    </div>
  );

  const BarChart = ({ data, title, color = 'blue' }: {
    data: Record<string, number>;
    title: string;
    color?: string;
  }) => {
    const maxValue = Math.max(...Object.values(data));
    const sortedData = Object.entries(data).sort(([,a], [,b]) => b - a).slice(0, 10);

    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="space-y-3">
          {sortedData.map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div className="flex-1 mr-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 truncate">{key}</span>
                  <span className="text-sm text-gray-500">{value}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-${color}-500 h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${(value / maxValue) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Charlie Kirk Q&A Statistics
              </h1>
              <p className="text-lg text-gray-600">
                Comprehensive Analysis of Religious Discourse and Biblical Integration
              </p>
            </div>
            <div className="mt-4 lg:mt-0">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium text-purple-800">
                    {stats.totalQA} Q&A Sessions
                  </span>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium text-green-800">
                    {stats.totalVerses} Bible Verses
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Q&A Sessions"
            value={stats.totalQA}
            icon={MessageSquare}
            color="blue"
          />
          <StatCard
            title="Bible Verses Referenced"
            value={stats.totalVerses}
            icon={BookOpen}
            color="green"
          />
          <StatCard
            title="Total Biblical References"
            value={stats.totalReferences}
            icon={TrendingUp}
            color="purple"
          />
          <StatCard
            title="Average Verses per Q&A"
            value={Math.round(stats.avgVersesPerQA * 10) / 10}
            icon={BarChart3}
            color="orange"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <BarChart
            data={stats.categoryStats}
            title="Q&A Sessions by Category"
            color="blue"
          />
          <BarChart
            data={stats.platformStats}
            title="Sessions by Platform"
            color="green"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <BarChart
            data={stats.mediaTypeStats}
            title="Sessions by Media Type"
            color="purple"
          />
          <BarChart
            data={stats.ageGroupStats}
            title="Sessions by Age Group"
            color="orange"
          />
        </div>

        {/* Top Bible Verses */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Referenced Bible Verses</h3>
          <div className="space-y-4">
            {stats.verseUsageStats.map((verse, index) => (
              <div key={verse.reference} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{verse.reference}</div>
                    <div className="text-sm text-gray-600 truncate">{verse.text.substring(0, 100)}...</div>
                    <div className="text-xs text-gray-500 mt-1">Context: {verse.context}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{verse.usageCount}</div>
                  <div className="text-sm text-gray-500">references</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Q&A Sessions Timeline</h3>
          <div className="space-y-4">
            {Object.entries(stats.timelineData)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([year, count]) => (
                <div key={year} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 text-sm font-medium text-gray-600">{year}</div>
                    <div className="flex-1">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-purple-500 h-3 rounded-full transition-all duration-300"
                          style={{ width: `${(count / Math.max(...Object.values(stats.timelineData))) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-12 text-right text-sm font-medium text-gray-900">{count}</div>
                </div>
              ))}
          </div>
        </div>

        {/* Theological Themes */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Theological Themes Distribution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(stats.themeStats)
              .sort(([,a], [,b]) => b - a)
              .slice(0, 15)
              .map(([theme, count]) => (
                <div key={theme} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900 truncate">{theme}</span>
                    <span className="text-sm font-bold text-purple-600">{count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(count / Math.max(...Object.values(stats.themeStats))) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
