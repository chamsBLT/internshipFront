node ('slave1') {
    def app
    
    stage('Clone repository') {
        checkout scm
    }
    
    stage('Build project') {
        echo "Done"
    }
    
    stage('Build image') {
      echo "Done"
    }

    stage('Push image') {
        echo "Done"       
    }  
      
    stage('Delpoying the App on Azure Kubernetes Service') {            
        app = docker.image('chxws/internshipfront:latest')            
        docker.withRegistry('', 'docker-credentials') {            
            app.pull()            

            sh "kubectl apply -f internship_front.yml"            
        }       
    }  
}
