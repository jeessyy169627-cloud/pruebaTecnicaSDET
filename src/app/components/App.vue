<template>
    <div>
        <nav class="navbar navbar-light bg-light">
    <a href="/" class="navbar-brand"> Reporte Pruebas SDET</a>
   </nav>
  
    <div class="col-md-7">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Test Case</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> PassedTestSuites </td>
                    <td>{{ tasks.numPassedTestSuites}}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td> PassedTestSuites </td>
                     <td>{{ tasks.numPendingTestSuites}}</td>                    
                </tr>
            </tbody>
             <tbody>
                <tr>
                    <td> ErrorTestSuites </td>
                     <td>{{ tasks.numRuntimeErrorTestSuites}}</td>                
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td> TotalTestSuites </td>
                     <td>{{ tasks.numTotalTestSuites}}</td>               
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td> TotalTests </td>
                     <td>{{ tasks.numTotalTests}}</td>              
                </tr>
            </tbody>
        </table>

    </div>
    </div>
</template>

<script>

class Task{
    constructor (title, description) {
        this.title = title,
        this.description = description;
    }
}

export default {
    data() {
        return {
            task: new Task(),
            tasks:[]
            }
        },
        created(){
            this.getTasks();
            console.log(this.getTasks());
        },

    methods:{
        addTask(){
            fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify(this.task),
                headers:{
                    'Accept': 'Application/json',
                    'Content-type': 'Application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                this.getTasks();
            })
            this.task = new Task();           
        },
        getTasks(){
            fetch('/results')
            .then(res => res.json())
            .then(data => {
                this.tasks = data ;
                console.log(this.tasks);
            });
        },
        deleteTask(id) {
            fetch('/api/tasks/' + id, {
                method: 'DELETE',
                headers:{
                    'Accept': 'Application/json',
                    'Content-type': 'Application/json'
                }
            })
            .then(res => res.json())
            .then(data => console.log(data));
        }
    }
}
</script>
