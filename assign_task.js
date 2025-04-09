
const supabaseUrl = 'https://rxardagcsuvpzphokvnp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4YXJkYWdjc3V2cHpwaG9rdm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMDUxMTcsImV4cCI6MjA1OTY4MTExN30.gDyfiQ7XRrWQd6K0UGUU28griEtolUS36pkjT063ks0'
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function assignTask() {
    const employee_name = document.getElementById('employeeName').value.trim();
    const task_description = document.getElementById('taskDesc').value.trim();

    if (!employee_name || !task_description) {
        return alert("Please enter both employee name and task description.");
    }

    const { error } = await supabase.from('tasks').insert([
        {
            employee_name: employee_name, // ✅ match column name exactly
            task_description,
            status: 'pending'
        }
    ]);

    if (error) {
        console.error(error);
        alert("Error assigning task: " + error.message);
    } else {
        alert('Task assigned!');
        document.getElementById('taskDesc').value = '';
    }
}
