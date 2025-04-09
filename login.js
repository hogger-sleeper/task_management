/* File: login.js */


const supabaseUrl = 'https://rxardagcsuvpzphokvnp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4YXJkYWdjc3V2cHpwaG9rdm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMDUxMTcsImV4cCI6MjA1OTY4MTExN30.gDyfiQ7XRrWQd6K0UGUU28griEtolUS36pkjT063ks0'
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) alert(error.message);
    else window.location.href = 'add_employee.html';
}




