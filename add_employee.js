
const supabaseUrl = 'https://rxardagcsuvpzphokvnp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4YXJkYWdjc3V2cHpwaG9rdm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMDUxMTcsImV4cCI6MjA1OTY4MTExN30.gDyfiQ7XRrWQd6K0UGUU28griEtolUS36pkjT063ks0'
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

/* File: add_employee.js */
async function addEmployee() {
    const name = document.getElementById('empName').value;
    const email = document.getElementById('empEmail').value;
    const { error } = await supabase
        .from('employees')
        .insert([{ name, email }]);

    if (error) alert(error.message);
    else alert('Employee added!');
}
