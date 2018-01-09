app.factory('JobService',function($http){
	var jobService={}
	jobService.saveJob=function(job){
		return $http.post("http://localhost:8081/middleware/savejob",job)
	}
	
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:8081/middleware/getalljobs")
	}
	
	jobService.getJobById=function(id){
        console.log(id)
        return $http.get("http://localhost:8081/middleware/getjobbyid/"+id)
    }
	
	return jobService;
})