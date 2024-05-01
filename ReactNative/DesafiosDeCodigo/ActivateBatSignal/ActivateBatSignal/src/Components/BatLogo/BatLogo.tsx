import React, { useState } from 'react';
import { View, Image, Text, Pressable, TextInput } from 'react-native';
import { styles } from './BatLogoStyles';
import BatLogoPng from '../../../assets/Pictures/BatLogo.png';

export function BatLogo() {

    const [Home, setHome] = useState(Boolean)

    function handleHome () {
      setHome(!Home)
    }



  return (
    <View style={styles.mainContainerOn}>
      {Home &&(
        <View style={styles.batLogoContainerOn}>
          <Pressable onPress={handleHome}>
            <Image source={BatLogoPng}    style= {styles.batLogoOn}></Image>
          </Pressable>


         {/*============ Título Input ============ */}
          <View style={styles.ViewPequeno}>
            <Text style={styles.TituloPequeno}>Título do Sinal</Text>
            <TextInput placeholder='Escreva o Título aqui.' style={styles.InputPequeno}></TextInput>
          </View>



          {/*============ Descrição Input ============ */}
          <View style={styles.descricaoView}>
            <Text style={styles.descricaoSinal}>Descrição do Sinal</Text>
            <TextInput placeholder='Escreva a descrição do sinal aqui.' style={styles.descricaoTextInput}></TextInput>
          </View>


          {/*============ Telefone Input ============ */}
          <View style={styles.ViewPequeno}>
            <Text style={styles.TituloPequeno}>Informe seu nome</Text>
            <TextInput keyboardType='number-pad' placeholder='Escreva aqui seu nome.' style={styles.InputPequeno}></TextInput>
          </View>


          {/*============ Email Input ============ */}
          <View style={styles.ViewPequeno}>
            <Text style={styles.TituloPequeno}>Informe seu E-mail</Text>
            <TextInput keyboardType='email-address' placeholder='Escreva aqui seu E-mail.' style={styles.InputPequeno}></TextInput>
          </View>
          

          {/*============ Telefone Input ============ */}
          <View style={styles.ViewPequeno}>
            <Text style={styles.TituloPequeno}>Informe seu número de telefone</Text>
            <TextInput keyboardType='number-pad' placeholder='Escreva aqui seu número de telefone.' style={styles.InputPequeno}></TextInput>
          </View>



        </View>
      )}

      {!Home && (

        <View style={styles.mainContainer}>
          <View style={styles.batLogoContainer}>
            <Image source={BatLogoPng} style={styles.batLogo}></Image>

            <Pressable onPress={handleHome}>
              <Text style={styles.ActivateBatSignal}>ACTIVATE BAT SIGNAL</  Text>
            </Pressable>
          </View>
        </View>

      )}
    </View>
  );
}