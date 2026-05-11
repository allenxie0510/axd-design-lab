-- 创建 works 表
CREATE TABLE IF NOT EXISTS works (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Brand Identity',
  description TEXT NOT NULL DEFAULT '',
  fullDescription TEXT NOT NULL DEFAULT '',
  image TEXT NOT NULL DEFAULT '',
  gallery TEXT[] DEFAULT '{}',
  services TEXT[] DEFAULT '{}',
  year TEXT NOT NULL DEFAULT '2024',
  client TEXT NOT NULL DEFAULT '',
  link TEXT NOT NULL DEFAULT '#',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 启用 RLS (Row Level Security)
ALTER TABLE works ENABLE ROW LEVEL SECURITY;

-- 创建允许所有操作的政策（对于公开访问的网站）
CREATE POLICY "Allow all operations" ON works
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- 插入默认作品数据
INSERT INTO works (id, title, category, description, fullDescription, image, gallery, services, year, client, link)
VALUES 
  ('nova-tech', 'Nova Tech', 'Brand Identity', 'AI Startup Branding', 'Nova Tech is an innovative AI startup focused on natural language processing. We created a complete brand identity including logo, color system, typography, and brand guidelines.', 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=800&fit=crop', 
   ARRAY['https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'],
   ARRAY['Brand Strategy', 'Visual Identity', 'Brand Guidelines'], '2024', 'Nova Tech Inc.', '#'),
   
  ('finflow', 'FinFlow', 'UI/UX Design', 'Fintech App Design', 'FinFlow is a next-generation mobile banking application. We designed an intuitive interface that simplifies complex financial operations.', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop',
   ARRAY['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop'],
   ARRAY['UI Design', 'UX Research', 'Prototyping'], '2024', 'FinFlow Financial', '#'),
   
  ('artisan', 'Artisan', 'Web Design', 'E-commerce Platform', 'Artisan is a premium e-commerce platform for handcrafted goods. We designed a digital experience that mirrors the quality of the products.', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
   ARRAY['https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop'],
   ARRAY['Web Design', 'E-commerce', 'Visual Design'], '2023', 'Artisan Collective', '#'),
   
  ('pulse-festival', 'Pulse Festival', 'Visual Identity', 'Music Festival Branding', 'Pulse Festival is an annual electronic music festival. We developed a dynamic visual identity that captures the energy of electronic music.', 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop',
   ARRAY['https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'],
   ARRAY['Visual Identity', 'Motion Design', 'Environmental Design'], '2023', 'Pulse Events', '#'),
   
  ('exhibition', 'Exhibition', 'Graphic Design', 'Poster Design', 'A series of posters for contemporary art exhibitions. Each poster reflects the theme while maintaining a cohesive visual language.', 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop',
   ARRAY['https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop'],
   ARRAY['Poster Design', 'Typography', 'Art Direction'], '2023', 'Museum of Modern Art', '#'),
   
  ('kinoishi', 'KINOISHI', 'Packaging Design', 'Product Packaging', 'KINOISHI is a premium Japanese skincare brand. We designed packaging that reflects the brand''s philosophy of natural beauty.', 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&h=800&fit=crop',
   ARRAY['https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'],
   ARRAY['Packaging Design', 'Brand Identity', 'Print Design'], '2024', 'KINOISHI Beauty', '#')
ON CONFLICT (id) DO NOTHING;
