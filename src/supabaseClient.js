import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ovwubzacbalbeppdspfy.supabase.co"
const supabaseKey = "sb_publishable_ja7M1dRgPnY2-DgnU7PV-g_fFq2qDz2"

export const supabase = createClient(supabaseUrl, supabaseKey)