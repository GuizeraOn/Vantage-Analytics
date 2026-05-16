-- Create tests table
CREATE TABLE IF NOT EXISTS tests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    variation_a TEXT NOT NULL,
    variation_b TEXT NOT NULL,
    duration_days INTEGER NOT NULL,
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create test_metrics table
CREATE TABLE IF NOT EXISTS test_metrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    test_id UUID REFERENCES tests(id) ON DELETE CASCADE,
    metric_name TEXT NOT NULL,
    value_a NUMERIC DEFAULT 0,
    value_b NUMERIC DEFAULT 0,
    date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
