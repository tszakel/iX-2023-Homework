export class Task {
    constructor(taskName, taskNum, taskComplete) {
        this.taskName = taskName;
        this.taskNum = taskNum;
        this.taskComplete = taskComplete
    }

    static fromJOSN(json){
        return new Task(json.taskName, json.taskNum,  json.taskComplete);
    }
}