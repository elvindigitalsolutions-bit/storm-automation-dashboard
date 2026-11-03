import React, { useState, useEffect } from 'react';
import { Upload, Play, BarChart3, FileText, Zap, CheckCircle, XCircle, Clock, DollarSign, TrendingUp, Users } from 'lucide-react';

const StormForgeDashboard = () => {
  const [campaigns, setCampaigns] = useState([
    {
      id: 'SF254-1728394800-abc123',
      productName: 'Premium Sneakers',
      status: 'complete',
      viralScore: 92,
      culturalScore: 95,
      timestamp: '2025-10-08T14:30:00',
      roi: '500-1000%',
      reach: '50K-200K'
    }
  ]);
  const [activeTab, setActiveTab] = useState('launch');
  const [formData, setFormData] = useState({
    productName: '',
    imageUrl: '',
    category: 'fashion',
    targetAudience: 'Nairobi Youth 18-35',
    brandVoice: 'authentic',
    email: '',
    phone: ''
  });
  const [currentCampaign, setCurrentCampaign] = useState(null);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');

  const categories = ['fashion', 'beauty', 'electronics', 'food', 'automotive', 'health', 'business'];
  const brandVoices = ['authentic', 'professional', 'humorous', 'aspirational', 'educational'];

  const handleLaunchCampaign = async () => {
    if (!formData.productName || !formData.imageUrl) {
      alert('Please fill in product name and image URL');
      return;
    }

    setActiveTab('monitor');
    setProgress(0);
    setStatusMessage('Initializing campaign...');

    // Simulate API call to n8n webhook
    const webhookUrl = 'https://sarunielvin.app.n8n.cloud/webhook/storm-forge-254';
    
    const payload = {
      productName: formData.productName,
      imageUrl: formData.imageUrl,
      category: formData.category,
      targetAudience: formData.targetAudience,
      brandVoice: formData.brandVoice,
      contactEmail: formData.email,
      contactPhone: formData.phone,
      goals: ['engagement', 'conversions', 'brand-awareness']
    };

    // Simulate progress updates
    const progressSteps = [
      { percent: 10, message: '🔍 Analyzing product image with Google Vision...' },
      { percent: 25, message: '🔥 Gathering Kenya trending topics...' },
      { percent: 40, message: '🎯 Analyzing competitor viral patterns...' },
      { percent: 55, message: '🤖 Generating AI strategy with Gemini...' },
      { percent: 70, message: '🌊 Creating Story Storm content...' },
      { percent: 85, message: '✍️ Writing traditional content...' },
      { percent: 95, message: '📊 Compiling final report...' },
      { percent: 100, message: '✅ Campaign complete!' }
    ];

    for (let step of progressSteps) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setProgress(step.percent);
      setStatusMessage(step.message);
    }

    // Add completed campaign
    const newCampaign = {
      id: `SF254-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      productName: formData.productName,
      status: 'complete',
      viralScore: Math.floor(Math.random() * 20) + 75,
      culturalScore: Math.floor(Math.random() * 15) + 82,
      timestamp: new Date().toISOString(),
      roi: '500-1000%',
      reach: '50K-200K'
    };

    setCampaigns([newCampaign, ...campaigns]);
    setCurrentCampaign(newCampaign);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'complete': return 'text-green-600 bg-green-50';
      case 'processing': return 'text-blue-600 bg-blue-50';
      case 'failed': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'complete': return <CheckCircle className="w-5 h-5" />;
      case 'processing': return <Clock className="w-5 h-5 animate-spin" />;
      case 'failed': return <XCircle className="w-5 h-5" />;
      default: return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Header */}
      <div className="border-b border-gray-700 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-400" />
              <div>
                <h1 className="text-2xl font-bold">STORM FORGE 254</h1>
                <p className="text-sm text-gray-400">AI Marketing Engine for Nairobi</p>
              </div>
            </div>
            <div className="flex gap-4 text-sm">
              <div className="bg-green-500/20 px-4 py-2 rounded-lg border border-green-500/30">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>System Online</span>
                </div>
              </div>
              <div className="bg-blue-500/20 px-4 py-2 rounded-lg border border-blue-500/30">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-blue-400" />
                  <span>Credits: 847</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-700 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1">
            {[
              { id: 'launch', label: 'Launch Campaign', icon: Play },
              { id: 'monitor', label: 'Monitor', icon: BarChart3 },
              { id: 'reports', label: 'Reports', icon: FileText }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-yellow-400 text-yellow-400 bg-yellow-400/10'
                    : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Launch Tab */}
        {activeTab === 'launch' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Upload className="w-6 h-6 text-yellow-400" />
                Launch New Campaign
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Product Name</label>
                  <input
                    type="text"
                    value={formData.productName}
                    onChange={(e) => setFormData({...formData, productName: e.target.value})}
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="e.g., Premium Leather Sneakers"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Product Image URL</label>
                  <input
                    type="text"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="https://example.com/product-image.jpg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat} className="bg-gray-900">
                          {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Brand Voice</label>
                    <select
                      value={formData.brandVoice}
                      onChange={(e) => setFormData({...formData, brandVoice: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                    >
                      {brandVoices.map(voice => (
                        <option key={voice} value={voice} className="bg-gray-900">
                          {voice.charAt(0).toUpperCase() + voice.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Target Audience</label>
                  <input
                    type="text"
                    value={formData.targetAudience}
                    onChange={(e) => setFormData({...formData, targetAudience: e.target.value})}
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="+254700000000"
                    />
                  </div>
                </div>

                <button
                  onClick={handleLaunchCampaign}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  LAUNCH STORM FORGE
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Monitor Tab */}
        {activeTab === 'monitor' && (
          <div className="space-y-6">
            {progress > 0 && progress < 100 && (
              <div className="bg-blue-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-6 h-6 text-blue-400 animate-pulse" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Campaign in Progress</h3>
                    <p className="text-sm text-gray-400">{statusMessage}</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">{progress}%</div>
                </div>
                <div className="w-full bg-black/30 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-full transition-all duration-500 rounded-full"
                    style={{width: `${progress}%`}}
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-green-500/10 backdrop-blur-sm rounded-xl border border-green-500/30 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <h3 className="font-semibold">Completed</h3>
                </div>
                <p className="text-3xl font-bold text-green-400">{campaigns.filter(c => c.status === 'complete').length}</p>
              </div>

              <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl border border-blue-500/30 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <h3 className="font-semibold">Avg Viral Score</h3>
                </div>
                <p className="text-3xl font-bold text-blue-400">
                  {campaigns.length > 0 
                    ? Math.round(campaigns.reduce((sum, c) => sum + c.viralScore, 0) / campaigns.length)
                    : 0}
                </p>
              </div>

              <div className="bg-purple-500/10 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold">Total Reach</h3>
                </div>
                <p className="text-3xl font-bold text-purple-400">2.5M+</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <h3 className="text-xl font-bold">Campaign History</h3>
              </div>
              <div className="divide-y divide-white/10">
                {campaigns.map(campaign => (
                  <div key={campaign.id} className="p-6 hover:bg-white/5 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-lg">{campaign.productName}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(campaign.status)}`}>
                            {getStatusIcon(campaign.status)}
                            {campaign.status.toUpperCase()}
                          </span>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                          <span>{new Date(campaign.timestamp).toLocaleString()}</span>
                          <span>ID: {campaign.id}</span>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-yellow-400">{campaign.viralScore}</div>
                          <div className="text-xs text-gray-400">Viral Score</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400">{campaign.culturalScore}</div>
                          <div className="text-xs text-gray-400">Cultural</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-3">
                      <button className="px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-lg hover:bg-yellow-400/30 transition-colors text-sm font-medium">
                        View Report
                      </button>
                      <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm font-medium">
                        Download Assets
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="text-center py-20">
            <FileText className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <h3 className="text-xl font-semibold mb-2">Reports Coming Soon</h3>
            <p className="text-gray-400">Advanced analytics and performance reports will be available here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StormForgeDashboard;