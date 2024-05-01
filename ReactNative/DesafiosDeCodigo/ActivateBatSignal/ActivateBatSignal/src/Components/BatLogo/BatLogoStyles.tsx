import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  mainContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  
  batLogoContainer:{
    alignItems: 'center',
  },
  
  batLogo: {
    resizeMode: 'contain',
    height: 180,
  },

  ActivateBatSignal: {
    textAlign: 'center',
    marginTop: 60,
    backgroundColor: '#222',
    padding: 10,
    width: '70%',
    color: '#fff',
    borderColor: '#000',
    borderWidth: 3,
    borderRadius: 6,
  },





  //======= BAT SIGNAL ACTIVADED =======//





  mainContainerOn: {
    height: '100%',
  },

  batLogoOn: {
    resizeMode: 'contain',
    height: 70,
  },
  
  batLogoContainerOn:{
    marginTop: 45,
    width: '100%',
    alignItems: 'center',
  },



//======== Campos Pequenos Style ============//
  ViewPequeno: {
    width: '100%'
  },

  TituloPequeno: {
    marginTop: 40,
    paddingLeft: 30,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 20,
  },

  InputPequeno: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },


//======== Descrição Styles ============//

  descricaoView: {
    width: '100%'
  },

  descricaoSinal: {
    marginTop: 40,
    paddingLeft: 30,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 20,
  },

  descricaoTextInput: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 40,
    width: '90%',
    alignSelf: 'center',
  },

});