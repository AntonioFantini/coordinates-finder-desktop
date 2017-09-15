pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        git(url: 'https://code.engineering.redhat.com/gerrit/p/jboss-prod-core/gates.git', branch: 'master')
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