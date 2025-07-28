pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = 'shubhamshrestha/contact-frontend'
        BACKEND_IMAGE = 'shubhamshrestha/contact-backend'
    }

    stages {
        stage('Clone Repo') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh 'docker build -t $FRONTEND_IMAGE ./frontend'
                    sh 'docker build -t $BACKEND_IMAGE ./backend'
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    sh 'docker push $FRONTEND_IMAGE'
                    sh 'docker push $BACKEND_IMAGE'
                }
            }
        }
    }
}
