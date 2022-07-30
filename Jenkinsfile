node ('slave1') {
    def app
    
    stage('Clone repository') {
        checkout scm
    } 
    
    stage('Build image') {
        app = docker.build("chxws/internship-app-front")
    }

    stage('Push image') {
        docker.withRegistry('', 'docker-credentials') {
            app.push("latest")
        }
    }  
      
    stage('Delpoying the App on AKS') {            
        app = docker.image('chxws/internship-app-front:latest')            
        docker.withRegistry('', 'docker-credentials') {            
            app.pull()            

            sh "kubectl apply -f internship_front.yml"            
        }       
    }  
}
