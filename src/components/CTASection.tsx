import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '../lib/utils';

export const CTASection = () => {
  const handleViewPlans = () => {
    scrollToSection('pricing');
  };

  return (
    <section className="py-24 container mx-auto px-4">
      <div className="bg-[#1E1B4B] rounded-3xl p-16 text-center max-w-5xl mx-auto border border-transparent hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5">
        <span className="text-blue-400 text-sm font-medium">
          Ready to Start?
        </span>
        <h2 className="text-4xl font-bold text-white mt-4 mb-4 font-press-start-2p text-3xl sm:text-4xl leading-relaxed">
          Join PlayForge Today
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Get access to premium gaming without the hardware investment. Start with a 7-day free trial.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link 
            to="/signup" 
            className="bg-[#6C5DD3] hover:bg-[#5B4EC2] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
          >
            Sign Up Now
            <ArrowRight size={20} />
          </Link>
          <button 
            onClick={handleViewPlans}
            className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View Plans
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 mt-6 text-gray-300">
          <Check size={20} className="text-blue-400" />
          <span>No credit card required for trial</span>
        </div>
      </div>
    </section>
  );
}; 