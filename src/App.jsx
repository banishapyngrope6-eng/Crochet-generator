import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, BookOpen, Heart, Trash2, Image } from 'lucide-react';

const CrochetGenerator = () => {
  const [skillLevel, setSkillLevel] = useState('beginner');
  const [category, setCategory] = useState('all');
  const [currentProject, setCurrentProject] = useState(null);
  const [savedProjects, setSavedProjects] = useState([]);
  const [showLibrary, setShowLibrary] = useState(false);

  const projects = {
    beginner: {
      accessories: [
        { 
          name: 'Simple Scarf', 
          description: 'A classic straight scarf using basic single crochet stitches', 
          time: '4-6 hours', 
          yarn: 'Worsted weight', 
          stitches: 'Chain, Single Crochet', 
          tip: 'Keep your tension consistent for an even fabric!',
          images: [
            { url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=400&fit=crop', credit: 'Photo by Mel Poole on Unsplash' },
            { url: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=400&fit=crop', credit: 'Photo by Artificial Photography on Unsplash' },
            { url: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=400&fit=crop', credit: 'Photo by Laura Chouette on Unsplash' }
          ]
        },
        { 
          name: 'Fingerless Gloves', 
          description: 'Cozy wrist warmers with a simple tube design', 
          time: '3-4 hours', 
          yarn: 'DK or Worsted', 
          stitches: 'Chain, Half Double Crochet', 
          tip: 'Measure your wrist to ensure a comfortable fit.',
          images: [
            { url: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Karolina Grabowska on Pexels' },
            { url: 'https://images.pexels.com/photos/7262775/pexels-photo-7262775.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Anna Shvets on Pexels' },
            { url: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Melvin Buezo on Pexels' }
          ]
        },
        { 
          name: 'Headband', 
          description: 'Quick and stylish ear warmer', 
          time: '2-3 hours', 
          yarn: 'Worsted weight', 
          stitches: 'Chain, Double Crochet', 
          tip: 'Try different colors for a striped effect!',
          images: [
            { url: 'https://images.pexels.com/photos/6069831/pexels-photo-6069831.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Anna Shvets on Pexels' },
            { url: 'https://images.pexels.com/photos/7978677/pexels-photo-7978677.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Los Muertos Crew on Pexels' },
            { url: 'https://images.pexels.com/photos/6069845/pexels-photo-6069845.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Anna Shvets on Pexels' }
          ]
        }
      ],
      homeDecor: [
        { 
          name: 'Dishcloth', 
          description: 'Square cotton dishcloth perfect for practice', 
          time: '1-2 hours', 
          yarn: 'Cotton worsted', 
          stitches: 'Chain, Single Crochet', 
          tip: 'Cotton yarn works best for absorbency!',
          images: [
            { url: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Karolina Grabowska on Pexels' },
            { url: 'https://images.pexels.com/photos/4239090/pexels-photo-4239090.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Karolina Grabowska on Pexels' },
            { url: 'https://images.pexels.com/photos/6069839/pexels-photo-6069839.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Anna Shvets on Pexels' }
          ]
        },
        { 
          name: 'Coasters', 
          description: 'Small circular coasters to protect surfaces', 
          time: '30 minutes each', 
          yarn: 'Cotton DK', 
          stitches: 'Magic Ring, Single Crochet', 
          tip: 'Make a matching set of 4-6 coasters!',
          images: [
            { url: 'https://images.pexels.com/photos/4239140/pexels-photo-4239140.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Karolina Grabowska on Pexels' },
            { url: 'https://images.pexels.com/photos/6069832/pexels-photo-6069832.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Anna Shvets on Pexels' },
            { url: 'https://images.pexels.com/photos/7978669/pexels-photo-7978669.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Los Muertos Crew on Pexels' }
          ]
        },
        { 
          name: 'Simple Placemat', 
          description: 'Rectangular placemat with basic stitches', 
          time: '3-4 hours', 
          yarn: 'Cotton worsted', 
          stitches: 'Chain, Half Double Crochet', 
          tip: 'Choose colors that match your kitchen!',
          images: [
            { url: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Ylanite Koppens on Pexels' },
            { url: 'https://images.pexels.com/photos/6069837/pexels-photo-6069837.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Anna Shvets on Pexels' },
            { url: 'https://images.pexels.com/photos/4239147/pexels-photo-4239147.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Karolina Grabowska on Pexels' }
          ]
        }
      ],
      clothing: [
        { 
          name: 'Infinity Scarf', 
          description: 'Circular scarf that loops around your neck', 
          time: '5-7 hours', 
          yarn: 'Bulky weight', 
          stitches: 'Chain, Double Crochet', 
          tip: 'Bulky yarn makes this project work up quickly!',
          images: [
            { url: 'https://images.pexels.com/photos/5945833/pexels-photo-5945833.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Karolina Grabowska on Pexels' },
            { url: 'https://images.pexels.com/photos/7978676/pexels-photo-7978676.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Los Muertos Crew on Pexels' },
            { url: 'https://images.pexels.com/photos/5945825/pexels-photo-5945825.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Karolina Grabowska on Pexels' }
          ]
        },
        { 
          name: 'Baby Beanie', 
          description: 'Sweet little hat for infants', 
          time: '2-3 hours', 
          yarn: 'Soft baby yarn', 
          stitches: 'Magic Ring, Single Crochet', 
          tip: 'Soft yarn is gentle on baby skin.',
          images: [
            { url: 'https://images.pexels.com/photos/6849206/pexels-photo-6849206.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Yan Krukov on Pexels' },
            { url: 'https://images.pexels.com/photos/6849204/pexels-photo-6849204.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Yan Krukov on Pexels' },
            { url: 'https://images.pexels.com/photos/7155474/pexels-photo-7155474.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Yan Krukov on Pexels' }
          ]
        }
      ],
      toys: [
        { 
          name: 'Ball', 
          description: 'Soft stuffed ball perfect for babies', 
          time: '2-3 hours', 
          yarn: 'Worsted weight', 
          stitches: 'Magic Ring, Single Crochet', 
          tip: 'Stuff firmly for better shape!',
          images: [
            { url: 'https://images.pexels.com/photos/7218368/pexels-photo-7218368.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Anna Shvets on Pexels' },
            { url: 'https://images.pexels.com/photos/6069842/pexels-photo-6069842.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Anna Shvets on Pexels' },
            { url: 'https://images.pexels.com/photos/7218376/pexels-photo-7218376.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Anna Shvets on Pexels' }
          ]
        },
        { 
          name: 'Simple Bookmark', 
          description: 'Flat rectangular bookmark', 
          time: '1 hour', 
          yarn: 'Any weight', 
          stitches: 'Chain, Single Crochet', 
          tip: 'Add a tassel for extra flair!',
          images: [
            { url: 'https://images.pexels.com/photos/6069854/pexels-photo-6069854.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Anna Shvets on Pexels' },
            { url: 'https://images.pexels.com/photos/4239151/pexels-photo-4239151.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Karolina Grabowska on Pexels' },
            { url: 'https://images.pexels.com/photos/7978659/pexels-photo-7978659.jpeg?w=600&h=400&fit=crop', credit: 'Photo by Los Muertos Crew on Pexels' }
          ]
        }
      ]
    },
    intermediate: {
      accessories: [
        { 
          name: 'Textured Beanie', 
          description: 'Hat with ribbed brim and textured body', 
          time: '6-8 hours', 
          yarn: 'Worsted weight', 
          stitches: 'Back Loop Only, Front Post/Back Post', 
          tip: 'The ribbing creates a stretchy, comfortable fit.',
          images: [
            { url: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400', credit: 'Photo by Kiwihug on Unsplash' }
          ]
        },
        { 
          name: 'Market Bag', 
          description: 'Sturdy mesh bag for shopping', 
          time: '8-10 hours', 
          yarn: 'Cotton worsted', 
          stitches: 'Chain Spaces, Double Crochet', 
          tip: 'The mesh design is stretchy and holds lots of items!',
          images: [
            { url: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400', credit: 'Photo by Priscilla Du Preez on Unsplash' }
          ]
        },
        { 
          name: 'Granny Square Purse', 
          description: 'Colorful bag made from granny squares', 
          time: '10-12 hours', 
          yarn: 'DK weight', 
          stitches: 'Granny Square, Slip Stitch joins', 
          tip: 'Mix and match colors for a unique look!',
          images: [
            { url: 'https://images.unsplash.com/photo-1564422170194-896b89110ef8?w=400', credit: 'Photo by Laura Chouette on Unsplash' }
          ]
        }
      ],
      homeDecor: [
        { 
          name: 'Throw Pillow Cover', 
          description: 'Decorative pillow with textured stitches', 
          time: '8-10 hours', 
          yarn: 'Worsted weight', 
          stitches: 'Bobble Stitch, Puff Stitch', 
          tip: 'Make sure to measure your pillow insert first!',
          images: [
            { url: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400', credit: 'Photo by Jonny Caspari on Unsplash' }
          ]
        },
        { 
          name: 'Baby Blanket', 
          description: 'Soft blanket with shell stitch border', 
          time: '15-20 hours', 
          yarn: 'Baby yarn', 
          stitches: 'Double Crochet, Shell Stitch', 
          tip: 'Wash gently to keep it soft for baby.',
          images: [
            { url: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=400', credit: 'Photo by Nathan Dumlao on Unsplash' }
          ]
        },
        { 
          name: 'Table Runner', 
          description: 'Elegant lacy table decoration', 
          time: '12-15 hours', 
          yarn: 'Cotton thread or DK', 
          stitches: 'Chain Spaces, Picot', 
          tip: 'Block your finished piece for crisp definition!',
          images: [
            { url: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400', credit: 'Photo by Alesia Kozik on Unsplash' }
          ]
        }
      ],
      clothing: [
        { 
          name: 'Cardigan Vest', 
          description: 'Sleeveless sweater with button closure', 
          time: '20-25 hours', 
          yarn: 'Worsted weight', 
          stitches: 'Double Crochet, Decreases', 
          tip: 'Take accurate measurements for a good fit!',
          images: [
            { url: 'https://images.unsplash.com/photo-1434510423563-f0cd2862d743?w=400', credit: 'Photo by Artificial Photography on Unsplash' }
          ]
        },
        { 
          name: 'Slouchy Hat', 
          description: 'Trendy oversized beanie', 
          time: '6-8 hours', 
          yarn: 'Worsted or bulky', 
          stitches: 'Various texture stitches', 
          tip: 'The slouch comes from extra rounds at the top!',
          images: [
            { url: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400', credit: 'Photo by Averie Woodard on Unsplash' }
          ]
        }
      ],
      toys: [
        { 
          name: 'Simple Amigurumi', 
          description: 'Cute stuffed animal with basic shaping', 
          time: '10-12 hours', 
          yarn: 'Worsted weight', 
          stitches: 'Magic Ring, Increases/Decreases', 
          tip: 'Use safety eyes for a professional look!',
          images: [
            { url: 'https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=400', credit: 'Photo by Aditya Romansa on Unsplash' }
          ]
        },
        { 
          name: 'Stuffed Octopus', 
          description: 'Adorable sea creature with 8 legs', 
          time: '8-10 hours', 
          yarn: 'Worsted weight', 
          stitches: 'Single Crochet, Shaping', 
          tip: 'Stuff the head firmly before adding legs!',
          images: [
            { url: 'https://images.unsplash.com/photo-1563188515-6f50efc8c5ca?w=400', credit: 'Photo by Amy Shamblen on Unsplash' }
          ]
        }
      ]
    },
    advanced: {
      accessories: [
        { 
          name: 'Lace Shawl', 
          description: 'Delicate triangular shawl with intricate pattern', 
          time: '30-40 hours', 
          yarn: 'Fingering weight', 
          stitches: 'Complex lace patterns, blocking required', 
          tip: 'Use stitch markers to keep track of pattern repeats!',
          images: [
            { url: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400', credit: 'Photo by Tamara Bellis on Unsplash' }
          ]
        },
        { 
          name: 'Cabled Scarf', 
          description: 'Textured scarf with cable patterns', 
          time: '15-20 hours', 
          yarn: 'Worsted weight', 
          stitches: 'Front Post/Back Post, Cable techniques', 
          tip: 'Cables create stunning 3D texture!',
          images: [
            { url: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400', credit: 'Photo by Laura Chouette on Unsplash' }
          ]
        },
        { 
          name: 'Filet Crochet Bag', 
          description: 'Structured bag with pictorial design', 
          time: '20-25 hours', 
          yarn: 'Cotton DK', 
          stitches: 'Filet crochet grid technique', 
          tip: 'Follow charts carefully for the design!',
          images: [
            { url: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400', credit: 'Photo by Tamara Bellis on Unsplash' }
          ]
        }
      ],
      homeDecor: [
        { 
          name: 'Mandala Tapestry', 
          description: 'Large circular wall hanging with intricate design', 
          time: '40-50 hours', 
          yarn: 'DK weight', 
          stitches: 'Complex stitch combinations, color work', 
          tip: 'Block thoroughly for perfectly even circles!',
          images: [
            { url: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=400', credit: 'Photo by Efe Kurnaz on Unsplash' }
          ]
        },
        { 
          name: 'Afghan with Motifs', 
          description: 'Blanket made of joined complex motifs', 
          time: '50-60 hours', 
          yarn: 'Worsted weight', 
          stitches: 'Various motif patterns, joining techniques', 
          tip: 'Weave in ends as you go to save time!',
          images: [
            { url: 'https://images.unsplash.com/photo-1541480601022-2308c0f02487?w=400', credit: 'Photo by Kira auf der Heide on Unsplash' }
          ]
        },
        { 
          name: 'Tunisian Crochet Rug', 
          description: 'Dense, woven-look rug using Tunisian technique', 
          time: '30-35 hours', 
          yarn: 'Bulky weight', 
          stitches: 'Tunisian Simple Stitch, color changes', 
          tip: 'Use a longer Tunisian hook for this project!',
          images: [
            { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', credit: 'Photo by Spacejoy on Unsplash' }
          ]
        }
      ],
      clothing: [
        { 
          name: 'Fitted Sweater', 
          description: 'Tailored pullover with shaping and sleeves', 
          time: '40-50 hours', 
          yarn: 'DK or worsted', 
          stitches: 'Various stitches, complex shaping', 
          tip: 'Make a gauge swatch and check measurements frequently!',
          images: [
            { url: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400', credit: 'Photo by Laura Chouette on Unsplash' }
          ]
        },
        { 
          name: 'Lace Cardigan', 
          description: 'Elegant open-front sweater with lace panels', 
          time: '45-55 hours', 
          yarn: 'Sport or DK weight', 
          stitches: 'Lace patterns, garment construction', 
          tip: 'Block each piece before assembly for best results!',
          images: [
            { url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400', credit: 'Photo by Mel Poole on Unsplash' }
          ]
        },
        { 
          name: 'Irish Crochet Dress', 
          description: 'Stunning garment with traditional Irish motifs', 
          time: '60-80 hours', 
          yarn: 'Thread or fingering weight', 
          stitches: 'Irish crochet techniques, motif making', 
          tip: 'This is a masterpiece project - take your time!',
          images: [
            { url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', credit: 'Photo by Chalo Garcia on Unsplash' }
          ]
        }
      ],
      toys: [
        { 
          name: 'Detailed Amigurumi Character', 
          description: 'Complex stuffed toy with clothing and accessories', 
          time: '25-30 hours', 
          yarn: 'DK weight', 
          stitches: 'Precise shaping, color work, details', 
          tip: 'Work on one section at a time to avoid overwhelming yourself!',
          images: [
            { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', credit: 'Photo by Richard Burlton on Unsplash' }
          ]
        },
        { 
          name: 'Crochet Doll', 
          description: 'Poseable doll with wire armature', 
          time: '35-40 hours', 
          yarn: 'Sport weight', 
          stitches: 'Shaping, wire work, detailed features', 
          tip: 'Use pipe cleaners or wire for poseable limbs!',
          images: [
            { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', credit: 'Photo by Cosmic Timetraveler on Unsplash' }
          ]
        }
      ]
    }
  };

  const categories = ['all', 'accessories', 'homeDecor', 'clothing', 'toys'];
  const categoryLabels = {
    all: 'All Projects',
    accessories: 'Accessories',
    homeDecor: 'Home Decor',
    clothing: 'Clothing',
    toys: 'Toys & Gifts'
  };

  useEffect(() => {
    const saved = localStorage.getItem('crochetLibrary');
    if (saved) {
      setSavedProjects(JSON.parse(saved));
    }
  }, []);

  const generateProject = () => {
    const levelProjects = projects[skillLevel];
    let availableProjects = [];

    if (category === 'all') {
      Object.values(levelProjects).forEach(cat => {
        availableProjects = [...availableProjects, ...cat];
      });
    } else {
      availableProjects = levelProjects[category] || [];
    }

    if (availableProjects.length > 0) {
      const randomProject = availableProjects[Math.floor(Math.random() * availableProjects.length)];
      setCurrentProject({ ...randomProject, skillLevel, id: Date.now() });
    }
  };

  const saveProject = () => {
    if (currentProject && !savedProjects.find(p => p.id === currentProject.id)) {
      const updated = [...savedProjects, currentProject];
      setSavedProjects(updated);
      localStorage.setItem('crochetLibrary', JSON.stringify(updated));
    }
  };

  const deleteProject = (id) => {
    const updated = savedProjects.filter(p => p.id !== id);
    setSavedProjects(updated);
    localStorage.setItem('crochetLibrary', JSON.stringify(updated));
  };

  const isProjectSaved = currentProject && savedProjects.find(p => p.id === currentProject.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6" 
         style={{
           backgroundImage: `
             radial-gradient(circle at 20% 50%, rgba(255, 182, 193, 0.3) 0%, transparent 50%),
             radial-gradient(circle at 80% 80%, rgba(216, 191, 216, 0.3) 0%, transparent 50%),
             radial-gradient(circle at 40% 20%, rgba(173, 216, 230, 0.3) 0%, transparent 50%)
           `
         }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-5xl">🧶</span>
            <h1 className="text-4xl font-bold text-gray-700" 
                style={{textShadow: '2px 2px 4px rgba(255,255,255,0.5)'}}>
              Crochet Project Generator
            </h1>
          </div>
          <p className="text-gray-600">Discover your next creative project based on your skill level</p>
        </div>

        <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl shadow-lg p-6 mb-6 border-2 border-white"
             style={{boxShadow: '0 8px 32px rgba(255, 182, 193, 0.2)'}}>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Your Skill Level</label>
            <div className="flex gap-3 flex-wrap">
              {['beginner', 'intermediate', 'advanced'].map(level => (
                <button
                  key={level}
                  onClick={() => setSkillLevel(level)}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all border-2 ${
                    skillLevel === level
                      ? 'bg-gradient-to-r from-pink-200 to-purple-200 text-gray-700 border-pink-300 shadow-md'
                      : 'bg-white bg-opacity-50 text-gray-600 border-gray-200 hover:border-pink-200'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Project Category</label>
            <div className="flex gap-3 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all border-2 ${
                    category === cat
                      ? 'bg-gradient-to-r from-blue-200 to-purple-200 text-gray-700 border-blue-300 shadow-md'
                      : 'bg-white bg-opacity-50 text-gray-600 border-gray-200 hover:border-blue-200'
                  }`}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={generateProject}
              className="flex-1 bg-gradient-to-r from-pink-300 to-purple-300 text-gray-700 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:from-pink-400 hover:to-purple-400 transition-all shadow-md border-2 border-pink-400"
            >
              <Sparkles className="w-5 h-5" />
              Generate New Idea
            </button>
            <button
              onClick={() => setShowLibrary(!showLibrary)}
              className="px-6 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-gray-700 rounded-2xl font-semibold flex items-center gap-2 hover:from-blue-300 hover:to-cyan-300 transition-all border-2 border-blue-300"
            >
              <BookOpen className="w-5 h-5" />
              Library ({savedProjects.length})
            </button>
          </div>
        </div>

        {currentProject && !showLibrary && (
          <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl shadow-lg p-8 border-2 border-white"
               style={{boxShadow: '0 8px 32px rgba(216, 191, 216, 0.2)'}}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-700 mb-2">{currentProject.name}</h2>
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-200 to-pink-200 text-gray-700 rounded-full text-sm font-medium border border-purple-300">
                  {currentProject.skillLevel.charAt(0).toUpperCase() + currentProject.skillLevel.slice(1)}
                </span>
              </div>
              <button
                onClick={saveProject}
                disabled={isProjectSaved}
                className={`p-3 rounded-2xl transition-all border-2 ${
                  isProjectSaved
                    ? 'bg-red-200 text-red-600 border-red-300 cursor-not-allowed'
                    : 'bg-pink-200 text-pink-600 border-pink-300 hover:bg-pink-300'
                }`}
              >
                <Heart className={`w-6 h-6 ${isProjectSaved ? 'fill-current' : ''}`} />
              </button>
            </div>

            <p className="text-gray-700 text-lg mb-6">{currentProject.description}</p>

            {/* Inspiration Section */}
            {currentProject.images && currentProject.images.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Image className="w-5 h-5 text-purple-600" />
                  <h3 className="font-semibold text-gray-700 text-lg">Visual Inspiration</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentProject.images.map((img, idx) => (
                    <div key={idx} className="rounded-2xl overflow-hidden border-2 border-pink-200 shadow-md bg-white">
                      <div className="w-full h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                        <div className="text-center p-4">
                          <span className="text-4xl mb-2 block">🧶</span>
                          <p className="text-sm text-gray-600 font-medium">{currentProject.name}</p>
                          <p className="text-xs text-gray-500 mt-1">Inspiration {idx + 1}</p>
                        </div>
                      </div>
                      <div className="bg-white bg-opacity-60 p-2">
                        <p className="text-xs text-gray-600 text-center">{img.credit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-purple-100 bg-opacity-70 p-4 rounded-2xl border-2 border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <h3 className="font-semibold text-gray-700">Time Estimate</h3>
                </div>
                <p className="text-gray-700">{currentProject.time}</p>
              </div>

              <div className="bg-pink-100 bg-opacity-70 p-4 rounded-2xl border-2 border-pink-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🧶</span>
                  <h3 className="font-semibold text-gray-700">Yarn Weight</h3>
                </div>
                <p className="text-gray-700">{currentProject.yarn}</p>
              </div>
            </div>

            <div className="bg-blue-100 bg-opacity-70 p-4 rounded-2xl mb-4 border-2 border-blue-200">
              <h3 className="font-semibold text-gray-700 mb-2">Stitches Needed</h3>
              <p className="text-gray-700">{currentProject.stitches}</p>
            </div>

            <div className="bg-green-100 bg-opacity-70 p-4 rounded-2xl border-l-4 border-green-400">
              <h3 className="font-semibold text-gray-700 mb-2">💡 Tip</h3>
              <p className="text-gray-700">{currentProject.tip}</p>
            </div>
          </div>
        )}

        {showLibrary && (
          <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl shadow-lg p-6 border-2 border-white"
               style={{boxShadow: '0 8px 32px rgba(173, 216, 230, 0.2)'}}>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Your Saved Projects</h2>
            {savedProjects.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No saved projects yet. Generate and save your favorite ideas!</p>
            ) : (
              <div className="space-y-4">
                {savedProjects.map(project => (
                  <div key={project.id} className="border-2 border-pink-200 rounded-2xl p-4 hover:shadow-md transition-shadow bg-white bg-opacity-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-700">{project.name}</h3>
                        <span className="inline-block px-2 py-1 bg-gradient-to-r from-purple-200 to-pink-200 text-gray-700 rounded-full text-xs font-medium mt-1 border border-purple-300">
                          {project.skillLevel.charAt(0).toUpperCase() + project.skillLevel.slice(1)}
                        </span>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                        <div className="flex gap-4 mt-2 text-sm text-gray-500">
                          <span>⏱️ {project.time}</span>
                          <span>🧶 {project.yarn}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteProject(project.id)}
                        className="p-2 text-red-500 hover:bg-red-100 rounded-2xl transition-all border-2 border-red-200"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};


export default CrochetGenerator;