-- 插入默认的6个作品
INSERT INTO axddesignlabworks (id, title, category, description, fullDescription, image, gallery, services, year, client, link)
VALUES 
  ('nova-tech', 'Nova Tech', 'Brand Identity', 'AI Startup Branding', 'Nova Tech is an innovative AI startup focused on natural language processing.', 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=800&fit=crop', 
   ARRAY['https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'],
   ARRAY['Brand Strategy', 'Visual Identity', 'Brand Guidelines'], '2024', 'Nova Tech Inc.', '#'),
   
  ('finflow', 'FinFlow', 'UI/UX Design', 'Fintech App Design', 'FinFlow is a next-generation mobile banking application.', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop',
   ARRAY['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop'],
   ARRAY['UI Design', 'UX Research', 'Prototyping'], '2024', 'FinFlow Financial', '#'),
   
  ('artisan', 'Artisan', 'Web Design', 'E-commerce Platform', 'Artisan is a premium e-commerce platform for handcrafted goods.', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
   ARRAY['https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop'],
   ARRAY['Web Design', 'E-commerce', 'Visual Design'], '2023', 'Artisan Collective', '#'),
   
  ('pulse-festival', 'Pulse Festival', 'Visual Identity', 'Music Festival Branding', 'Pulse Festival is an annual electronic music festival.', 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop',
   ARRAY['https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'],
   ARRAY['Visual Identity', 'Motion Design', 'Environmental Design'], '2023', 'Pulse Events', '#'),
   
  ('exhibition', 'Exhibition', 'Graphic Design', 'Poster Design', 'A series of posters for contemporary art exhibitions.', 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop',
   ARRAY['https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop'],
   ARRAY['Poster Design', 'Typography', 'Art Direction'], '2023', 'Museum of Modern Art', '#'),
   
  ('kinoishi', 'KINOISHI', 'Packaging Design', 'Product Packaging', 'KINOISHI is a premium Japanese skincare brand.', 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&h=800&fit=crop',
   ARRAY['https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'],
   ARRAY['Packaging Design', 'Brand Identity', 'Print Design'], '2024', 'KINOISHI Beauty', '#');
