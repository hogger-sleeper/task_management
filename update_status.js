
/* File: update_status.js */

const supabaseUrl = 'https://rxardagcsuvpzphokvnp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4YXJkYWdjc3V2cHpwaG9rdm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMDUxMTcsImV4cCI6MjA1OTY4MTExN30.gDyfiQ7XRrWQd6K0UGUU28griEtolUS36pkjT063ks0'
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function updateStatus() {
    const employee_name = document.getElementById('employeeName').value;
    const task_description = document.getElementById('taskDesc').value;
    const status = document.getElementById('status').value;

    const { error } = await supabase
        .from('tasks')
        .update({ status })
        .match({ employee_name, task_description });

    if (error) {
        alert(error.message);
    } else {
        alert('Status updated!');
    }
}