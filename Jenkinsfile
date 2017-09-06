pipeline {
  agent any
  stages {
    stage('CommunityArtifactsVersChecks') {
      steps {
        git(url: 'http://git.app.eng.bos.redhat.com/git/jboss-prod-core/gates.git/', branch: 'master')
        load 'gates/communityartifactsversioning/RunGate.groovy'
      }
    }
    stage('buuldable cus sc') {
      steps {
        load 'gates/buildablecustomersourcecode/RunGate.groovy'
      }
    }
    stage('jdk v') {
      steps {
        load 'gates/jdkversioning/RunGate.groovy'
      }
    }
  }
}