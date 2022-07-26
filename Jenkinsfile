node ('slave1') {
    def app
    
    stage('Clone repository') {
       
      checkout scm
    }
      
    stage('Delpoying the App on Azure Kubernetes Service') {            
        app = docker.image('chxws/testcnt:latest')            
        docker.withRegistry('', 'docker-credentials') {            
            app.pull()            

            sh "kubectl apply -f internship_front.yml"            
        }       
    }  
}
