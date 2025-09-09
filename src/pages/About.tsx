import { 
  Brain, 
  Users, 
  Target, 
  Award,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowRight
} from 'lucide-react';
import rahul from "../photos/rahul.png";
import sandeep from "../photos/Sandeep.jpeg";
import parikshit from "../photos/Parikshit Nag.jpeg"
import vishal from "../photos/Vishal.jpeg";
import zaid from "../photos/Zaid.jpeg";
import mainImage from "../photos/About us image.jpeg";

function AboutUs() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      {/* <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Pioneering AI solutions that transform businesses and empower human potential
          </p>
          <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
        </div>
      </section> */}

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src={mainImage}
                alt="AI Technology"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                We Are IntelliMark AI
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded by AI researchers and technology visionaries, we believe artificial intelligence should enhance human capability, not replace it.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we're trusted by World's biggest brands to deliver intelligent solutions that drive real results.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                <p className="text-lg font-medium text-purple-900 italic">
                  "Intelligence amplified by innovation, success defined by impact."
                </p>
                <p className="text-purple-700 mt-2">— Rahul Srivastava, CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10M+</div>
              <div className="text-purple-200">Data Points Processed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">20%</div>
              <div className="text-purple-200">Higher Growth</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5x</div>
              <div className="text-purple-200">ROI Increase</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50M+</div>
              <div className="text-purple-200">Dollars Unlocked</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Visionaries</h2>
            <p className="text-xl text-gray-600">The minds behind the magic</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={rahul}
                  alt="Dr. Sarah Chen"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Rahul Srivastava</h3>
              <p className="text-purple-600 font-medium mb-3">CEO</p>
              <p className="text-gray-600 text-sm">Ex-Marketing Analytics Lead at Unilever</p>
            </div>
            
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={vishal}
                  alt="Michael Rodriguez"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Vishal Bhavsar</h3>
              <p className="text-purple-600 font-medium mb-3">Head of Supply Chain</p>
              <p className="text-gray-600 text-sm">Ex-Lowe’s, Fractal, Unilever, Marico and Loreal. 10 Years experience in Data Science</p>
            </div>
            
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={sandeep}
                  alt="Dr. Aisha Johnson"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Sandeep Mathew</h3>
              <p className="text-purple-600 font-medium mb-3">Advisor - Revenue Growth Management</p>
              <p className="text-gray-600 text-sm">16 Years in FMCG Industry, Ex-Unilever Global Director for Revenue Management.</p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={parikshit}
                  alt="Dr. Aisha Johnson"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Parikshit Nag</h3>
              <p className="text-purple-600 font-medium mb-3">Advisor - AI Research</p>
              <p className="text-gray-600 text-sm">14 Years Data Science Leader in FMCG Industry, Ex-Unilever, Patent in Forecasting</p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={zaid}
                  alt="Mhd Zaid"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Mhd Zaid</h3>
              <p className="text-purple-600 font-medium mb-3">Data Science Lead</p>
              <p className="text-gray-600 text-sm">Responsible for research, development and delivery of next generation models.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Contact Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Drives Us</h2>
            <p className="text-xl text-purple-200">Four principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="group text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ethical AI</h3>
              <p className="text-purple-200 text-sm">Responsible innovation for a better tomorrow</p>
            </div>
            
            <div className="group text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Human-First</h3>
              <p className="text-purple-200 text-sm">Technology that amplifies human potential</p>
            </div>
            
            <div className="group text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-purple-200 text-sm">Uncompromising quality in everything we build</p>
            </div>
            
            <div className="group text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-purple-200 text-sm">Pushing boundaries, creating possibilities</p>
            </div>
          </div>
          
          {/* Contact CTA */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-purple-200 mb-8">Let's build the future together</p>
            
            <div className="flex justify-center space-x-6 mt-8">
              <Linkedin className="h-8 w-8 text-purple-300 hover:text-white cursor-pointer transition-colors transform hover:scale-110" />
              {/* <Twitter className="h-8 w-8 text-purple-300 hover:text-white cursor-pointer transition-colors transform hover:scale-110" />
              <Github className="h-8 w-8 text-purple-300 hover:text-white cursor-pointer transition-colors transform hover:scale-110" /> */}
            </div>
            <div className="flex justify-center mt-6">
              <a
                            href="https://outlook.office.com/bookwithme/user/e8ee839cd0224fb7bbc88d3de0f0e74a@intellimark.ai/meetingtype/X5VsiCFLD0O0S7V9WOBTyQ2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:scale-105"
                          >
                            <span className="relative z-10 flex items-center">Talk to an Expert <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;