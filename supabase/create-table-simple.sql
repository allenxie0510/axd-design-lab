-- 删除旧表
DROP TABLE IF EXISTS axddesignlabworks;

-- 创建表
CREATE TABLE axddesignlabworks (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  fullDescription TEXT NOT NULL DEFAULT '',
  image TEXT NOT NULL DEFAULT '',
  gallery TEXT[] DEFAULT ARRAY[]::TEXT[],
  services TEXT[] DEFAULT ARRAY[]::TEXT[],
  year TEXT NOT NULL DEFAULT '',
  client TEXT NOT NULL DEFAULT '',
  link TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 关闭 RLS
ALTER TABLE axddesignlabworks DISABLE ROW LEVEL SECURITY;
