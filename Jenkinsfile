pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        git(url: 'http://git.app.eng.bos.redhat.com/git/jboss-prod-core/gates.git/', branch: 'master')
        load 'gates/productsupport/RunGate.groovy'
      }
    }
  }
}