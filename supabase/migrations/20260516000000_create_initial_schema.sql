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

-- Seed data: 3 initial tests for demonstration
INSERT INTO tests (name, variation_a, variation_b, duration_days) VALUES
('VSL Headline Test - Maio', 'Headline A (Curiosidade)', 'Headline B (Benefício Direto)', 7),
('Checkout Layout - Mobile', 'Layout Padrão', 'Layout 1-Step', 14),
('Pricing Tier Test', 'Preço R$ 97', 'Preço R$ 147', 30);

-- Seed metrics for 'VSL Headline Test - Maio'
DO $$
DECLARE
    test_uuid UUID;
BEGIN
    SELECT id INTO test_uuid FROM tests WHERE name = 'VSL Headline Test - Maio' LIMIT 1;
    
    INSERT INTO test_metrics (test_id, metric_name, value_a, value_b) VALUES
    (test_uuid, 'Cliques', 1156, 1240),
    (test_uuid, 'Visitas Página', 1046, 1180),
    (test_uuid, 'ICs', 208, 250),
    (test_uuid, 'Vendas Iniciadas', 31, 45),
    (test_uuid, 'Vendas Aprovadas', 21, 35),
    (test_uuid, 'Faturamento Bruto', 1200.50, 1850.75),
    (test_uuid, 'Gastos Anúncios', 643.19, 700.00);
END $$;

