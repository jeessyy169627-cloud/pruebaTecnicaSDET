<template>
    <div>
        <nav class="navbar navbar-light bg-light">
    <a href="/" class="navbar-brand"> Reporte Pruebas SDET</a>
   </nav>

   
    <!-- <div class="container">
            <div class="row pt-5">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">
                         <form @submit.prevent="addTask">
                            <div class="form-group">
                                <input type="text" v-model="task.title" 
                                placeholder="insert a task"
                                class="form-control">   
                            </div>
                                <div class="form-group">
                                    <textarea 
                                    v-model="task.description"
                                    cols="30" rows="10" 
                                    class="form-control"
                                    placeholder="Insert a description"></textarea>
                                </div>
                                <button class="btn btn-primary
                                btn-block">Send</button>
                        </form>
    </div>
    </div>
    </div>
    
    </div>
    </div>
   -->    
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
                    <td>{{ tasks.title }}</td>
                    <td>{{ tasks.description }}</td>

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
            fetch('/api/tasks')
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