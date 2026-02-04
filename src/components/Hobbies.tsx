'use client';

interface GameItem {
  name: string;
  logo?: string;
  link?: string;
  emoji?: string;
}

interface HobbyItem {
  name: string;
  image?: string;
  logo?: string;
  emoji?: string;
}

interface Hobby {
  id: string;
  title: string;
  icon: string;
  items?: HobbyItem[] | GameItem[];
  hasIframe?: boolean;
}

const hobbies: Hobby[] = [
  {
    id: 'photography',
    title: 'Photographie',
    icon: '📷',
    hasIframe: true,
    items: []
  },
  {
    id: 'music',
    title: '',
    icon: '',
    items: [
      { name: 'Guitare', emoji: '🎸' },
      { name: 'Dessin', emoji: '🎨' },
      { name: 'Cuisine', emoji: '🍳' }
    ]
  },
  {
    id: 'gaming',
    title: 'Jeux vidéo',
    icon: '🎮',
    items: [
      { name: 'League of Legends (Cruento#Ray)', logo: '/games/Lol.png', link: 'https://www.op.gg/summoners/euw/Cruento-Ray' },
      { name: 'Sekiro', logo: '/games/Sekiro.png' },
      { name: 'Elden Ring', logo: '/games/Elden.png' },
      { name: 'Teamfight Tactics', logo: '/games/TFT.png' }
    ]
  }
];

export default function Hobbies() {
  return (
    <section className="w-full py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Loisirs</h2>
      
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {hobbies.map((hobby) => (
          <div 
            key={hobby.id} 
            className={hobby.id === 'music' ? '' : "p-6 bg-card/80 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors"}
          >
            {hobby.id === 'music' ? (
              <div className="flex gap-4 justify-center">
                {hobby.items && hobby.items.map((item: any, idx: number) => (
                  <div key={idx} className="flex-1 max-w-xs p-6 bg-card/80 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors text-center">
                    <div className="text-4xl mb-3">{item.emoji}</div>
                    <span className="text-sm font-semibold">{item.name}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="text-4xl mb-2">{hobby.icon}</div>
                  <h3 className="text-lg font-semibold text-center">{hobby.title}</h3>
                </div>
                
                <div className="flex-1">
                  {hobby.hasIframe && (
                    <div className="w-full">
                      <div className="bg-white/90 dark:bg-card/80 border border-gray-200 dark:border-gray-700 rounded-xl shadow p-3 flex flex-col items-center max-w-2xl">
                        <span className="font-semibold text-sm text-primary mb-2">Feed Instagram</span>
                        <iframe src="https://www.instagram.com/rayan.koussa/embed/" title="Feed Instagram Photographie" className="w-full h-[450px] rounded-lg border-none" allow="encrypted-media" loading="lazy" style={{ background: 'white' }}></iframe>
                      </div>
                    </div>
                  )}
                  
                  {hobby.items && hobby.items.length > 0 && hobby.id !== 'music' && (
                    <div className="grid grid-cols-2 gap-3">
                      {hobby.items.map((item: any, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                          {item.logo && (
                            <img alt={item.name} className="h-8 w-auto max-w-[40px] object-contain flex-shrink-0" src={item.logo} />
                          )}
                          {item.link ? (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs font-semibold">
                              {item.name}
                            </a>
                          ) : (
                            <span className="text-xs font-semibold">{item.name}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
