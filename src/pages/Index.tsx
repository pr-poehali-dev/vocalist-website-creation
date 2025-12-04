import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const socialLinks = [
    { name: 'Spotify', icon: 'Music2', url: '#' },
    { name: 'Apple Music', icon: 'Music', url: '#' },
    { name: 'YouTube', icon: 'Youtube', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'VK', icon: 'MessageCircle', url: '#' },
  ];

  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'Live Session' },
    { id: 'dQw4w9WgXcQ', title: 'Acoustic' },
    { id: 'dQw4w9WgXcQ', title: 'Behind The Scenes' },
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/6341a748-b383-461d-9941-b329b92f35ea/files/01812963-3dd1-4cd4-961f-f76db1f04bdc.jpg',
    'https://cdn.poehali.dev/projects/6341a748-b383-461d-9941-b329b92f35ea/files/4d812e2f-2b52-421a-8170-cd695aaaa6e0.jpg',
    'https://cdn.poehali.dev/projects/6341a748-b383-461d-9941-b329b92f35ea/files/01812963-3dd1-4cd4-961f-f76db1f04bdc.jpg',
    'https://cdn.poehali.dev/projects/6341a748-b383-461d-9941-b329b92f35ea/files/4d812e2f-2b52-421a-8170-cd695aaaa6e0.jpg',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-24">
          <section className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              ALEXEY VOLODIN
            </h1>
            <p className="text-lg text-muted-foreground">
              Indie вокалист • Автор песен
            </p>
            <div className="flex gap-3 justify-center pt-4">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="ghost" size="icon" className="hover:text-primary">
                  <Icon name={link.icon as any} size={20} />
                </Button>
              ))}
            </div>
          </section>

          <section className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold">О мне</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <img
                src="https://cdn.poehali.dev/projects/6341a748-b383-461d-9941-b329b92f35ea/files/4d812e2f-2b52-421a-8170-cd695aaaa6e0.jpg"
                alt="Vocalist"
                className="rounded-lg w-full object-cover h-72"
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Инди-вокалист и автор песен из Москвы. Моя музыка — это смесь 
                  альтернативного рока, электроники и экспериментального звучания.
                </p>
                <p>
                  В своих песнях я исследую темы личной свободы, любви и поиска себя.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold">Видео</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {videos.map((video, index) => (
                <div key={index} className="space-y-2">
                  <div className="relative aspect-video bg-card rounded-lg overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">{video.title}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold">Галерея</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg aspect-square">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8 text-center animate-fade-in pb-12">
            <h2 className="text-3xl font-bold">Контакты</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Слушайте мою музыку на популярных платформах
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="outline" className="hover:border-primary">
                  <Icon name={link.icon as any} size={18} className="mr-2" />
                  {link.name}
                </Button>
              ))}
            </div>
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Для сотрудничества</p>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Mail" size={18} className="mr-2" />
                booking@vocalist.com
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
