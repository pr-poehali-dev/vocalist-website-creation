import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'about', label: 'О мне', icon: 'User' },
    { id: 'shows', label: 'Выступления', icon: 'Calendar' },
    { id: 'videos', label: 'Видео', icon: 'Video' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
    { id: 'contact', label: 'Контакты', icon: 'Mail' },
  ];

  const shows = [
    { date: '15 Января 2025', venue: 'Клуб "Арт-Пространство"', city: 'Москва', time: '20:00' },
    { date: '28 Января 2025', venue: 'Бар "Indie Lounge"', city: 'Санкт-Петербург', time: '21:00' },
    { date: '10 Февраля 2025', venue: 'Фестиваль "Звуки Города"', city: 'Казань', time: '19:30' },
  ];

  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'Последний сингл - Live Session' },
    { id: 'dQw4w9WgXcQ', title: 'Акустический концерт' },
    { id: 'dQw4w9WgXcQ', title: 'Behind The Scenes' },
  ];

  const socialLinks = [
    { name: 'Spotify', icon: 'Music2', url: '#', color: 'hover:text-green-400' },
    { name: 'Apple Music', icon: 'Music', url: '#', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: 'Youtube', url: '#', color: 'hover:text-red-400' },
    { name: 'Instagram', icon: 'Instagram', url: '#', color: 'hover:text-purple-400' },
    { name: 'VK', icon: 'MessageCircle', url: '#', color: 'hover:text-blue-400' },
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/6341a748-b383-461d-9941-b329b92f35ea/files/01812963-3dd1-4cd4-961f-f76db1f04bdc.jpg',
    'https://cdn.poehali.dev/projects/6341a748-b383-461d-9941-b329b92f35ea/files/4d812e2f-2b52-421a-8170-cd695aaaa6e0.jpg',
    'https://cdn.poehali.dev/projects/6341a748-b383-461d-9941-b329b92f35ea/files/01812963-3dd1-4cd4-961f-f76db1f04bdc.jpg',
    'https://cdn.poehali.dev/projects/6341a748-b383-461d-9941-b329b92f35ea/files/4d812e2f-2b52-421a-8170-cd695aaaa6e0.jpg',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              VOCALIST
            </h1>
            <div className="hidden md:flex gap-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
            <Button variant="outline" size="icon" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {activeSection === 'home' && (
          <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
            <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/6341a748-b383-461d-9941-b329b92f35ea/files/01812963-3dd1-4cd4-961f-f76db1f04bdc.jpg')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10 text-center px-4 animate-fade-in">
              <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                ALEXEY VOLODIN
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Indie вокалист • Автор песен • Артист
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 animate-scale-in">
                  <Icon name="Play" size={20} className="mr-2" />
                  Слушать
                </Button>
                <Button size="lg" variant="outline" className="animate-scale-in">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Билеты
                </Button>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold mb-8 text-center">О мне</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="https://cdn.poehali.dev/projects/6341a748-b383-461d-9941-b329b92f35ea/files/4d812e2f-2b52-421a-8170-cd695aaaa6e0.jpg"
                    alt="Vocalist"
                    className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Привет! Я Алексей — инди-вокалист и автор песен из Москвы. Моя музыка — это смесь 
                    альтернативного рока, электроники и экспериментального звучания.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Начал свой путь в музыке 5 лет назад, выступая в небольших клубах. Сегодня мои треки 
                    набирают миллионы прослушиваний на стриминговых платформах, а концерты собирают полные залы.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    В своих песнях я исследую темы личной свободы, любви и поиска себя. Каждое выступление — 
                    это уникальное эмоциональное путешествие.
                  </p>
                  <div className="flex gap-3 pt-4">
                    {socialLinks.map((link) => (
                      <Button key={link.name} variant="ghost" size="icon" className={link.color}>
                        <Icon name={link.icon as any} size={22} />
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'shows' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-12 text-center">Ближайшие выступления</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {shows.map((show, index) => (
                <Card
                  key={index}
                  className="p-6 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="Calendar" size={24} className="text-primary" />
                        <h3 className="text-2xl font-bold">{show.date}</h3>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Icon name="MapPin" size={18} />
                        <p className="text-lg">{show.venue}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Clock" size={18} />
                        <p>{show.city} • {show.time}</p>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Icon name="Ticket" size={18} className="mr-2" />
                      Купить билет
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'videos' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-12 text-center">Видео</h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-video bg-card">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'gallery' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-12 text-center">Галерея</h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl group cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-xl font-semibold">Концерт {index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-5xl font-bold mb-8">Контакты</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Слушайте мою музыку на популярных платформах и следите за новостями в соцсетях
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
                {socialLinks.map((link, index) => (
                  <Card
                    key={link.name}
                    className="p-6 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <Icon
                        name={link.icon as any}
                        size={32}
                        className={`transition-colors ${link.color} group-hover:scale-110 transition-transform`}
                      />
                      <p className="text-sm font-semibold">{link.name}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <Card className="p-8 bg-card/50 backdrop-blur">
                <h3 className="text-2xl font-bold mb-4">Для сотрудничества</h3>
                <p className="text-muted-foreground mb-6">
                  По вопросам букирования и коллабораций пишите на почту
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Mail" size={20} className="mr-2" />
                  booking@vocalist.com
                </Button>
              </Card>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground">© 2025 Alexey Volodin. Все права защищены.</p>
            <div className="flex gap-4">
              {socialLinks.slice(0, 3).map((link) => (
                <Button key={link.name} variant="ghost" size="icon" className={link.color}>
                  <Icon name={link.icon as any} size={20} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
