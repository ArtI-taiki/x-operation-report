"use client"

import type React from "react"
import { useState, useRef } from "react"

const XReportTemplate = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const recommendationsRef = useRef<HTMLDivElement>(null)
  const syntaxPatternsRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 px-4 shadow-lg">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold">X運用分析・戦略レポート</h1>
          <p className="text-xl mt-2">対象期間: 2025年03月01日～2025年04月01日</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-100 shadow-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4">
          <ul className="flex overflow-x-auto py-3 space-x-4">
            <li>
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-3 py-2 rounded-md ${activeTab === "overview" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}
              >
                エグゼクティブサマリー
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("metrics")}
                className={`px-3 py-2 rounded-md ${activeTab === "metrics" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}
              >
                KPI分析
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("content")}
                className={`px-3 py-2 rounded-md ${activeTab === "content" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}
              >
                コンテンツ分析
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("syntax")}
                className={`px-3 py-2 rounded-md ${activeTab === "syntax" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}
              >
                構文パターン
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("action")}
                className={`px-3 py-2 rounded-md ${activeTab === "action" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}
              >
                実施計画
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => scrollToSection(recommendationsRef)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md font-bold transition-all flex items-center"
          >
            <span>実施推奨アクション</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection(syntaxPatternsRef)}
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg shadow-md font-bold transition-all flex items-center"
          >
            <span>推奨構文パターン</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-4">エグゼクティブサマリー</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">期間ハイライト</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-500 font-medium">インプレッション総数</p>
                    <p className="text-2xl font-bold">125,487</p>
                    <p className="text-sm text-gray-500">30日間合計</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-sm text-green-500 font-medium">新規フォロワー獲得</p>
                    <p className="text-2xl font-bold">342 (純増: 287)</p>
                    <p className="text-sm text-gray-500">フォロー解除: 55</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <p className="text-sm text-purple-500 font-medium">平均エンゲージメント率</p>
                    <p className="text-2xl font-bold">3.8%</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-600 font-medium">最もパフォーマンスが高かった投稿タイプ</p>
                    <p className="text-xl font-bold">事例紹介</p>
                    <p className="text-sm text-gray-500">平均インプレッション数: 4,320</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">主要インサイト</h3>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li className="text-gray-700">
                    <span className="font-semibold">事例紹介</span>はエンゲージメント率が
                    <span className="text-blue-600 font-bold">5.2%</span>と高く、一般的な投稿の約2.3倍の効果
                  </li>
                  <li className="text-gray-700">
                    <span className="font-semibold">インプレッション数とリツイート数</span>
                    に強い相関関係（0.78）があり、<span className="text-blue-600 font-bold">質問形式の投稿</span>
                    が最も効果的（4.1%）
                  </li>
                  <li className="text-gray-700">
                    <span className="font-semibold">画像付き投稿</span>が最も高いクリック率（
                    <span className="text-blue-600 font-bold">2.8%</span>
                    ）を記録、特に図解入りコンテンツが最も反応が高い
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">優先アクション項目</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700">
                      <span className="font-semibold text-blue-800">火曜日と木曜日の12-14時</span>
                      に事例紹介を画像付きで投稿
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700">
                      週1回は<span className="font-semibold text-blue-800">業界トレンド解説</span>
                      を投稿し、専門性で信頼性をアピール
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700">
                      投稿文字数を<span className="font-semibold text-blue-800">80-120字</span>
                      に設定し、質問形式の構文を試行
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "metrics" && (
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-4">KPI分析</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">曜日別パフォーマンス</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
                          曜日
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 text-right text-sm font-semibold text-gray-700">
                          インプレッション数
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 text-right text-sm font-semibold text-gray-700">
                          エンゲージメント
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 text-right text-sm font-semibold text-gray-700">
                          エンゲージメント率
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 text-right text-sm font-semibold text-gray-700">
                          新規フォロー
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">月曜日</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">18,245</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">642</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">3.5%</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">42</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">火曜日</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">21,356</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">876</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">4.1%</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">58</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">水曜日</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">19,782</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">712</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">3.6%</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">47</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">木曜日</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">22,104</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">928</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">4.2%</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">62</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">金曜日</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">17,895</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">698</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">3.9%</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">51</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">土曜日</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">12,458</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">423</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">3.4%</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">38</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">日曜日</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">13,647</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">478</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">3.5%</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">44</td>
                      </tr>
                      <tr className="bg-gray-50 font-medium">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">合計/平均</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">125,487</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">4,757</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">3.8%</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">342</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">投稿間隔分析</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">投稿間隔と効果</h4>
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase">投稿間隔</th>
                          <th className="py-2 px-3 text-right text-xs font-medium text-gray-500 uppercase">
                            平均インプレッション
                          </th>
                          <th className="py-2 px-3 text-right text-xs font-medium text-gray-500 uppercase">
                            サンプル数
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-3 text-sm text-gray-700 font-medium">1日1回</td>
                          <td className="py-2 px-3 text-right text-sm text-gray-700">3,245</td>
                          <td className="py-2 px-3 text-right text-sm text-gray-700">18</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 text-sm text-gray-700 font-medium">1日2-3回</td>
                          <td className="py-2 px-3 text-right text-sm text-gray-700">2,876</td>
                          <td className="py-2 px-3 text-right text-sm text-gray-700">12</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="mt-3 text-sm text-gray-600">
                      1日1回の投稿が最も効果的。頻度を上げると1投稿あたりの効果が減少する傾向。
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">時間帯別エンゲージメント率</h4>
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase">
                            曜日_時間帯
                          </th>
                          <th className="py-2 px-3 text-right text-xs font-medium text-gray-500 uppercase">
                            平均エンゲージメント率
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-3 text-sm text-gray-700 font-medium">火曜日_12-14時</td>
                          <td className="py-2 px-3 text-right text-sm text-gray-700">4.8%</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 text-sm text-gray-700 font-medium">木曜日_12-14時</td>
                          <td className="py-2 px-3 text-right text-sm text-gray-700">4.6%</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 text-sm text-gray-700 font-medium">水曜日_18-20時</td>
                          <td className="py-2 px-3 text-right text-sm text-gray-700">4.2%</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="mt-3 text-sm text-gray-600">
                      平日のランチタイム（12-14時）が最も効果的。特に火曜日と木曜日のパフォーマンスが高い。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">フォロワー獲得要因</h3>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">指標とフォロワー増加の相関</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase">指標</th>
                          <th className="py-2 px-3 text-right text-xs font-medium text-gray-500 uppercase">
                            フォロワー増加との相関
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-3 text-sm text-gray-700 font-medium">リツイート数</td>
                          <td className="py-2 px-3 text-right text-sm text-gray-700">0.82</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 text-sm text-gray-700 font-medium">いいね数</td>
                          <td className="py-2 px-3 text-right text-sm text-gray-700">0.65</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 text-sm text-gray-700 font-medium">返信数</td>
                          <td className="py-2 px-3 text-right text-sm text-gray-700">0.58</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 text-sm text-gray-700 font-medium">インプレッション数</td>
                          <td className="py-2 px-3 text-right text-sm text-gray-700">0.47</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 text-sm text-gray-700 font-medium">プロフィールクリック</td>
                          <td className="py-2 px-3 text-right text-sm text-gray-700">0.76</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">
                    リツイート数とプロフィールクリックがフォロワー増加と最も強い相関関係にある。コンテンツの拡散性と興味喚起が重要。
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "content" && (
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-4">コンテンツ分析</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">高インプレッション投稿の特徴</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-800 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">
                        1
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">最もインプレッション数が多い投稿（8,742）</p>
                        <p className="text-gray-600 mt-1">
                          「創業融資の審査で最も重視される3つのポイントとは？実際の事例から解説します。#起業 #融資
                          #創業」
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-800 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">
                        2
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">2位の投稿（7,856）</p>
                        <p className="text-gray-600 mt-1">
                          「【事例紹介】創業半年で売上1,000万円を達成したスタートアップの資金調達戦略とは？図解でわかりやすく解説します。」
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-800 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">
                        3
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">3位の投稿（6,921）</p>
                        <p className="text-gray-600 mt-1">
                          「創業融資を成功させるための事業計画書の書き方、あなたは知っていますか？専門家が教える5つのコツ
                          #起業 #事業計画」
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-gray-700 font-medium">共通点:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                    <li>具体的な数字を含む（3つ、1,000万円、5つなど）</li>
                    <li>質問形式または疑問を投げかける構文を使用</li>
                    <li>ハッシュタグを効果的に活用（2-3個）</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">投稿特性とインプレッションの相関</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
                          要因
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
                          インプレッションへの影響
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
                          最適値/形式
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">文字数</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">相関係数 0.65</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">80-120字</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">
                          ハッシュタグ数
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">相関係数 0.42</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">2-3個</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">
                          画像の有無
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">相関係数 0.78</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">図解入り画像1枚</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">
                          質問形式
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">相関係数 0.71</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                          文末または文頭に質問
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">
                          数字の使用
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                          インプレッション+35%
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">具体的な数値1-2個</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">
                          投稿時間帯
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">最大+42%の差</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">平日12-14時</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  画像付き投稿と質問形式の投稿が最もインプレッション数に影響を与えている。特に図解入りの画像と具体的な数字を含む投稿が効果的。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">投稿タイプ別効果比較</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
                          投稿タイプ
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 text-right text-sm font-semibold text-gray-700">
                          平均インプレッション
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 text-right text-sm font-semibold text-gray-700">
                          エンゲージメント率
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 text-right text-sm font-semibold text-gray-700">
                          総合スコア
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50 bg-blue-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">
                          事例紹介
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">4,320</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">5.2%</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">8.7</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">
                          業界トレンド
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">3,875</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">4.8%</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">7.9</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">
                          ノウハウ共有
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">3,642</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">4.5%</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">7.6</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">
                          質問投げかけ
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">3,124</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">4.1%</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">6.8</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">
                          ニュース共有
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">2,876</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">3.2%</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">5.4</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-gray-700">
                          一般的な告知
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">2,245</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">2.3%</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-right text-sm text-gray-700">4.1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  事例紹介と業界トレンドの投稿が最も効果的。具体的な成功事例や専門的な知見を共有することで、高いエンゲージメントを獲得している。
                </p>
              </div>
            </div>
          )}

          {activeTab === "syntax" && (
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-4">推奨構文パターン</h2>
              <div ref={syntaxPatternsRef} className="mt-2"></div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">インプレッション最大化構文</h3>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">「数字+疑問形」構文</h4>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-sm mb-3 whitespace-pre-wrap">
                    【〇〇の3つのポイント】あなたは知っていますか？ 1. [ポイント1] 2. [ポイント2] 3. [ポイント3]
                    詳細はプロフィールのリンクから #ハッシュタグ1 #ハッシュタグ2
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700 font-medium">構文の特徴:</p>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-sm text-gray-600">
                      <li>具体的な数字を見出しに含める</li>
                      <li>読者に直接問いかける疑問形を使用</li>
                      <li>箇条書きで視認性を高める</li>
                      <li>関連性の高いハッシュタグを2-3個付ける</li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700 font-medium">効果データ:</p>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-sm text-gray-600">
                      <li>平均インプレッション: 4,250（通常の1.8倍）</li>
                      <li>エンゲージメント率: 4.8%</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">「事例+解説」構文</h4>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-sm mb-3 whitespace-pre-wrap">
                    【事例紹介】[具体的な成果]を達成した[対象]の[テーマ]とは？ 図解でわかりやすく解説します。
                    #ハッシュタグ1 #ハッシュタグ2
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700 font-medium">構文の特徴:</p>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-sm text-gray-600">
                      <li>「事例紹介」と明示的に示す</li>
                      <li>具体的な数値実績を含める</li>
                      <li>「図解」「わかりやすく」などの価値を示す言葉を使用</li>
                      <li>画像を必ず添付する</li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700 font-medium">効果データ:</p>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-sm text-gray-600">
                      <li>平均インプレッション: 3,980（通常の1.7倍）</li>
                      <li>詳細クリック率: 3.2%（通常の2.1倍）</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">エンゲージメント最大化構文</h3>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">「意見募集」構文</h4>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-sm mb-3 whitespace-pre-wrap">
                    [トピック]について、皆さんはどう思いますか？ 私の考えは、 ・[ポイント1] ・[ポイント2] ・[ポイント3]
                    あなたのご意見をぜひ教えてください。 #ハッシュタグ1 #ハッシュタグ2
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700 font-medium">構文の特徴:</p>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-sm text-gray-600">
                      <li>読者に直接意見を求める</li>
                      <li>自分の意見を先に提示する</li>
                      <li>箇条書きで読みやすくする</li>
                      <li>最後に再度意見を求める</li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700 font-medium">効果データ:</p>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-sm text-gray-600">
                      <li>エンゲージメント率: 5.6%（通常の1.9倍）</li>
                      <li>返信率: 2.8%（通常の3.2倍）</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">「悩み解決」構文</h4>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-sm mb-3 whitespace-pre-wrap">
                    「[よくある悩み]」 このお悩み、解決策があります。 ✅ [解決策1] ✅ [解決策2] ✅ [解決策3]
                    詳しくはプロフィールのリンクから #ハッシュタグ1 #ハッシュタグ2
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700 font-medium">構文の特徴:</p>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-sm text-gray-600">
                      <li>ターゲットの悩みを引用形式で示す</li>
                      <li>明確に「解決策があります」と提示</li>
                      <li>チェックマーク絵文字で視認性を高める</li>
                      <li>詳細へのアクションを促す</li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700 font-medium">効果データ:</p>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-sm text-gray-600">
                      <li>平均インプレッション: 3,450</li>
                      <li>エンゲージメント率: 4.9%</li>
                      <li>プロフィールアクセス率: 2.1%（通常の2.8倍）</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">ビジネス接続最大化構文</h3>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">「限定情報」構文</h4>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-sm mb-3 whitespace-pre-wrap">
                    【期間限定】[サービス/情報]を無料公開中 普段は有料の[サービス/情報]を、
                    期間限定で無料提供しています。 ▼内容 ・[内容1] ・[内容2] ・[内容3] 詳細・申込はプロフィールURLから
                    #ハッシュタグ1 #ハッシュタグ2
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700 font-medium">構文の特徴:</p>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-sm text-gray-600">
                      <li>「期間限定」「無料」などの緊急性・価値を示す言葉を使用</li>
                      <li>通常の価値を示してから特別提供を伝える</li>
                      <li>具体的な内容を箇条書きで示す</li>
                      <li>明確なCTAを含める</li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700 font-medium">効果データ:</p>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-sm text-gray-600">
                      <li>URLクリック率: 3.2%（通常の2.7倍）</li>
                      <li>エンゲージメント率: 4.5%（通常の1.5倍）</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">「専門知識共有」構文</h4>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-sm mb-3 whitespace-pre-wrap">
                    【[業界]最新トレンド】 知っておくべき[テーマ]の変化 今、[業界]では[トレンド]が急速に進んでいます。
                    特に注目すべきは 1. [ポイント1] 2. [ポイント2] 3. [ポイント3]
                    詳細レポートはプロフィールから無料ダウンロード #ハッシュタグ1 #ハッシュタグ2
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700 font-medium">構文の特徴:</p>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-sm text-gray-600">
                      <li>「最新」「トレンド」などの言葉で情報の鮮度を示す</li>
                      <li>「知っておくべき」と重要性を強調</li>
                      <li>具体的なポイントを数字付きで列挙</li>
                      <li>無料の詳細情報を提供</li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700 font-medium">効果データ:</p>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-sm text-gray-600">
                      <li>インプレッション: 3,780</li>
                      <li>エンゲージメント率: 4.2%</li>
                      <li>リンククリック率: 2.8%（通常の2.3倍）</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "action" && (
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-4">実施計画</h2>
              <div ref={recommendationsRef} className="mt-2"></div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">短期改善アクション（1ヶ月以内）</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
                          優先度
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
                          アクション
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
                          期待効果
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
                          実施時期
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-red-600">高</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                          火曜・木曜の12-14時に事例紹介投稿を実施
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                          インプレッション+40%、エンゲージメント+35%
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">即時〜</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-red-600">高</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                          全投稿に図解入り画像を添付
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                          インプレッション+30%、クリック率+25%
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">即時〜</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-yellow-600">中</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                          「数字+疑問形」構文テンプレートの活用
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                          エンゲージメント+20%
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">1週間以内</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-sm font-medium text-yellow-600">中</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                          週1回の業界トレンド解説投稿の定期化
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">フォロワー増加+15%</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">2週間以内</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">投稿テンプレート例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-700 mb-2">インプレッション最大化テンプレート</h4>
                    <div className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-sm whitespace-pre-wrap">
                      【創業融資の3つのポイント】あなたは知っていますか？ 1. 事業計画の具体性 2. 返済能力の証明 3.
                      実績・経験の提示 詳細はプロフィールのリンクから #創業融資 #起業 #資金調達
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-700 mb-2">フォロワー獲得テンプレート</h4>
                    <div className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-sm whitespace-pre-wrap">
                      【事例紹介】創業半年で売上1,000万円を達成したスタートアップの資金調達戦略とは？
                      図解でわかりやすく解説します。 #スタートアップ #資金調達 #創業
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm md:col-span-2">
                    <h4 className="text-lg font-semibold text-blue-700 mb-2">ビジネス接続テンプレート</h4>
                    <div className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-sm whitespace-pre-wrap">
                      【期間限定】創業融資審査通過率を高める無料診断を実施中 普段は有料の事業計画書診断を、
                      期間限定で無料提供しています。 ▼診断内容 ・資金計画の妥当性チェック ・返済計画の実現可能性評価
                      ・審査官目線でのフィードバック 詳細・申込はプロフィールURLから #創業融資 #事業計画 #起業支援
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">KPI目標と予測</h3>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">次期目標値</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                      <p className="text-sm text-blue-700 font-medium">インプレッション目標</p>
                      <p className="text-xl font-bold">35,000/週</p>
                      <p className="text-xs text-gray-500">現状から+25%</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                      <p className="text-sm text-green-700 font-medium">フォロワー増加目標</p>
                      <p className="text-xl font-bold">100人/週（純増）</p>
                      <p className="text-xs text-gray-500">現状から+30%</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                      <p className="text-sm text-purple-700 font-medium">エンゲージメント率目標</p>
                      <p className="text-xl font-bold">4.5%</p>
                      <p className="text-xs text-gray-500">現状から+18%</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                      <p className="text-sm text-yellow-700 font-medium">ビジネス接続目標</p>
                      <p className="text-lg font-bold">リンククリック: 850/週</p>
                      <p className="text-lg font-bold">問い合わせ: 25/週</p>
                      <p className="text-xs text-gray-500">+35%/+40%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">成長予測モデル</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    推奨施策を実施した場合の成長予測は以下の通りです。特に事例紹介と業界トレンド解説の定期投稿が成長を牽引します。
                  </p>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded border border-gray-200">
                      <p className="text-sm font-medium text-gray-700">1ヵ月後:</p>
                      <p className="text-sm text-gray-600">
                        フォロワー数 +350人、週間インプレッション 32,000、エンゲージメント率 4.2%、問い合わせ数 週20件
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded border border-gray-200">
                      <p className="text-sm font-medium text-gray-700">3ヵ月後:</p>
                      <p className="text-sm text-gray-600">
                        フォロワー数 +1,200人、週間インプレッション 45,000、エンゲージメント率 4.8%、問い合わせ数 週35件
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div className="bg-gray-50 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">総括</h2>
          <p className="text-gray-700 mb-4">
            本分析から、以下の3つの戦略が目的達成に最も効果的であることが明らかになりました：
          </p>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-lg font-semibold text-blue-800">事例紹介コンテンツの強化</p>
              <p className="text-gray-700 mt-1">
                具体的な数字と成果を含む事例紹介が最もエンゲージメントが高く、フォロワー獲得にも効果的です。特に図解入りの画像と組み合わせることで、インプレッション数とエンゲージメント率の両方を向上させることができます。
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="text-lg font-semibold text-green-800">投稿タイミングの最適化</p>
              <p className="text-gray-700 mt-1">
                火曜日と木曜日の12-14時が最もパフォーマンスが高い時間帯であることが判明しました。この時間帯に重要なコンテンツを投稿し、1日1回の投稿頻度を維持することで、各投稿の効果を最大化できます。
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <p className="text-lg font-semibold text-purple-800">構文パターンの標準化</p>
              <p className="text-gray-700 mt-1">
                「数字+疑問形」や「事例+解説」などの高パフォーマンス構文を標準化し、テンプレート化することで、一貫性のある効果的な投稿を継続的に生成できます。特に質問形式と具体的な数字を組み合わせた構文が効果的です。
              </p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            これらの戦略を組み合わせて実施することで、3ヶ月後には現在の約1.5倍のエンゲージメントとフォロワー増加率を達成できる見込みです。特に事例紹介と業界トレンド解説を中心としたコンテンツ戦略が、ビジネス目標達成の鍵となります。
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 px-4 border-t border-gray-200 mt-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 text-sm">© 2025 X運用分析レポート</p>
          <p className="text-gray-500 text-xs mt-1">分析期間: 2025年03月01日～2025年04月01日</p>
        </div>
      </footer>
    </div>
  )
}

export default XReportTemplate
