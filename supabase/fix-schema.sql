-- 检查并创建 axddesignlabworks 表（如果不存在）
CREATE TABLE IF NOT EXISTS axddesignlabworks (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  fullDescription TEXT NOT NULL DEFAULT '',
  image TEXT NOT NULL DEFAULT '',
  gallery TEXT[] DEFAULT '{}',
  services TEXT[] DEFAULT '{}',
  year TEXT NOT NULL DEFAULT '',
  client TEXT NOT NULL DEFAULT '',
  link TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 如果表已存在但缺少字段，添加它们
DO $$
BEGIN
  -- 检查并添加字段
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'axddesignlabworks' AND column_name = 'title') THEN
    ALTER TABLE axddesignlabworks ADD COLUMN title TEXT NOT NULL DEFAULT '';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'axddesignlabworks' AND column_name = 'category') THEN
    ALTER TABLE axddesignlabworks ADD COLUMN category TEXT NOT NULL DEFAULT '';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'axddesignlabworks' AND column_name = 'description') THEN
    ALTER TABLE axddesignlabworks ADD COLUMN description TEXT NOT NULL DEFAULT '';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'axddesignlabworks' AND column_name = 'fullDescription') THEN
    ALTER TABLE axddesignlabworks ADD COLUMN fullDescription TEXT NOT NULL DEFAULT '';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'axddesignlabworks' AND column_name = 'image') THEN
    ALTER TABLE axddesignlabworks ADD COLUMN image TEXT NOT NULL DEFAULT '';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'axddesignlabworks' AND column_name = 'gallery') THEN
    ALTER TABLE axddesignlabworks ADD COLUMN gallery TEXT[] DEFAULT '{}';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'axddesignlabworks' AND column_name = 'services') THEN
    ALTER TABLE axddesignlabworks ADD COLUMN services TEXT[] DEFAULT '{}';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'axddesignlabworks' AND column_name = 'year') THEN
    ALTER TABLE axddesignlabworks ADD COLUMN year TEXT NOT NULL DEFAULT '';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'axddesignlabworks' AND column_name = 'client') THEN
    ALTER TABLE axddesignlabworks ADD COLUMN client TEXT NOT NULL DEFAULT '';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'axddesignlabworks' AND column_name = 'link') THEN
    ALTER TABLE axddesignlabworks ADD COLUMN link TEXT NOT NULL DEFAULT '';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'axddesignlabworks' AND column_name = 'created_at') THEN
    ALTER TABLE axddesignlabworks ADD COLUMN created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
  END IF;
END $$;

-- 插入默认数据
INSERT INTO axddesignlabworks (id, title, category, description, fullDescription, image, gallery, services, year, client, link)
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
