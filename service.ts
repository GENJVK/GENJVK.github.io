import fs from 'fs'

export class Service {
    constructor() {
    }

    async readTodoList() {
        const filePath = __dirname + '/TodoList.csv'

        const data = await fs.promises.readFile(filePath, 'utf-8')
        const lines = data.split('\n')
        let result: [] = []
        const headers = lines[0].split(',')
        for (let i = 1; i < lines.length; i++) {
            let obj: {} = {}
            if (lines[i] == undefined || lines[i].trim() == "") {
                continue;
            }
            let words = lines[i].split(',');
            for (let j = 0; j < words.length; j++) {
                obj[headers[j].trim()] = words[j];
            }
            //@ts-ignore
            result.push(obj);
        }
        return result;
    }

    async addTodoList(
        post: {
            id: string,
            name?: string,
            description?: string,
            assignedto?: string,
            duedate?: string,
            status?: string,
        }
    ) {

        const filePath = __dirname + '/TodoList.csv'
        console.log(post)
        const reformedInput = "\n" + post.id + "," + post.name + "," + post.description + "," + post.assignedto + "," + post.duedate + "," + post.status

        await fs.appendFile(filePath, reformedInput, (e) => console.log(e))

        const csvFileData = await fs.readFileSync(filePath, 'utf8')
        console.log(csvFileData)
        return { 'status': 'ok' }
    }

    async deleteTodoList(id: string) {

        const filePath = __dirname + '/TodoList.csv'
        const data = await fs.promises.readFile(filePath, 'utf-8')
        const lines = data.split('\n')
        let result: string = "";
        for (let i = 0; i < lines.length; i++) {
            if (lines[i] == undefined || lines[i].trim() == "") continue;
            let words = lines[i].split(',');
            if (words[0] == id) continue;
            result = result + lines[i] + "\n"
        }
        await fs.promises.writeFile(filePath, result)

        return { 'result': 'deleted' }
    }

    // [done]
    async updateTodoList(id: string, name?: string, description?: string, assignedto?: string, duedate?: string, status?: string) {

        const filePath = __dirname + '/TodoList.csv'
        const data = await fs.promises.readFile(filePath, 'utf-8')
        const lines = data.split('\n')
        let result: string = "";
        // console.log("service " + id + name + description + assignedto + duedate + status )
        for (let i = 0; i < lines.length; i++) {
            if (lines[i] == undefined || lines[i].trim() == "") continue;
            let words = lines[i].split(',');
            console.log(`words[0]: ${words[0]}, id: ${id}, ${words[0] == id}`)
            if (words[0] == id) {
                words[1] = "" + name;
                words[2] = "" + description;
                words[3] = "" + assignedto;
                words[4] = "" + duedate;
                words[5] = "" + status;
                result = result + words.join(',') + "\n"
            } else {
                result = result + lines[i] + "\n"
            }
        }
        await fs.promises.writeFile(filePath, result)

        return { 'result': 'updated' }
    }
}