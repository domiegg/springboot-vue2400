const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot0fh04/",
            name: "springboot0fh04",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot0fh04/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "一款基于BS的美食网站的设计与实现"
        } 
    }
}
export default base
