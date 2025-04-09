/* File: view_tasks.js */

const supabaseUrl = 'https://rxardagcsuvpzphokvnp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4YXJkYWdjc3V2cHpwaG9rdm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMDUxMTcsImV4cCI6MjA1OTY4MTExN30.gDyfiQ7XRrWQd6K0UGUU28griEtolUS36pkjT063ks0'
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function viewTasks() {
    const employee_name = document.getElementById('employeeName').value;

    const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('employee_name', employee_name);

    if (error) return alert(error.message);

    const pending = data.filter(task => task.status === 'pending');
    const completed = data.filter(task => task.status === 'completed');

    document.getElementById('pendingTasks').innerHTML = pending
        .map(t => `<li>${t.task_description}</li>`)
        .join('');

    document.getElementById('completedTasks').innerHTML = completed
        .map(t => `<li>${t.task_description}</li>`)
        .join('');
}
