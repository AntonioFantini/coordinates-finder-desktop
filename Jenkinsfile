pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        git(url: 'http://git.app.eng.bos.redhat.com/git/jboss-prod-core/gates.git/', branch: 'master')
        load 'gates/jdkversioning/RunGate.groovy'
      }
    }
    stage('test2 ') {
      steps {
        load 'gates/buildtoolversioning/RunGate.groovy'
      }
    }
  }
}