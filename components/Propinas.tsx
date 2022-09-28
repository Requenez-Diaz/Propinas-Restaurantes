import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ViewBase,
} from "react-native";

const Propinas = () => {
  const [Propina, setPropina] = useState<string>("5.55");
  const [totalPersona, setTotalPersona] = useState<string>("200");
  const [total, setTotal] = useState<number>(444.4);
  const [personas, setPersonas] = useState<number>(7);
  const [porcentaje, setPorcentaje] = useState<number>(16);

  const calcularPropina = () => {
    let propinaTotal: number = total * (porcentaje / 100);
    let propinasPorPersonas: number = propinaTotal / personas;
    if (isNaN(propinasPorPersonas) || propinasPorPersonas === Infinity) {
      propinasPorPersonas = 0;
    }
    setPropina(propinasPorPersonas.toFixed(2).toString());
    let _total: number = total + propinaTotal;
    setTotalPersona(propinaTotal.toFixed(2).toString());
    //toFixed() devuelve una representacion de cadena de numobj
  };
  const resetData = () => {
    setTotal(0);
  };

  useEffect(calcularPropina, [total, personas, porcentaje]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textHeader}> Cuenta </Text>
        <View>
          <Text style={styles.inputAdd}> C$</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            defaultValue={total.toString()}
            onChangeText={() => setTotal}
          />
        </View>
        <View style={styles.boxSelectTip}>
          <Text style={styles.textHeader}>
            Seleccione el porcentaje de la Propina
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => setPorcentaje(5)}
              style={
                porcentaje == 5
                  ? styles.botonPorcentajeActivo
                  : styles.botonPorcentaje
              }
            >
              <Text
                style={
                  porcentaje == 5
                    ? styles.textoBotonPorcentajeactivo
                    : styles.textoBotonPorcentaje
                }
              >
                5%
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPorcentaje(10)}
              style={
                porcentaje == 10
                  ? styles.botonPorcentajeActivo
                  : styles.botonPorcentaje
              }
            >
              <Text
                style={
                  porcentaje == 10
                    ? styles.textoBotonPorcentajeactivo
                    : styles.textoBotonPorcentaje
                }
              >
                10%
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPorcentaje(15)}
              style={
                porcentaje == 15
                  ? styles.botonPorcentajeActivo
                  : styles.botonPorcentaje
              }
            >
              <Text
                style={
                  porcentaje == 15
                    ? styles.textoBotonPorcentajeactivo
                    : styles.textoBotonPorcentaje
                }
              >
                15%
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPorcentaje(25)}
              style={
                porcentaje == 25
                  ? styles.botonPorcentajeActivo
                  : styles.botonPorcentaje
              }
            >
              <Text
                style={
                  porcentaje == 25
                    ? styles.textoBotonPorcentajeactivo
                    : styles.textoBotonPorcentaje
                }
              >
                25%
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPorcentaje(50)}
              style={
                porcentaje == 50
                  ? styles.botonPorcentajeActivo
                  : styles.botonPorcentaje
              }
            >
              <Text
                style={
                  porcentaje == 50
                    ? styles.textoBotonPorcentajeactivo
                    : styles.textoBotonPorcentaje
                }
              >
                50%
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonPorcentaje}>
              <Text>Custom</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.boxSelectTip}>
          <Text style={styles.textHeader}>Numero de Personas</Text>
          <View>
            <TextInput
              style={styles.inputs}
              keyboardType="numeric"
              defaultValue={personas.toString()}
              onChangeText={() => setPersonas}
            />
          </View>
        </View>
        <View style={styles.resum}>
          <View style={styles.filaResum}>
            <Text style={styles.textWheader}>Propina</Text>
            <Text style={styles.textGheader}>Persona</Text>
          </View>
          <View>
            <Text style={styles.textMountResum}>${Propina}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => resetData()} style={styles.btnReset}>
          <Text style={styles.textoBtnReset}>Reset</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Propinas;

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
  },

  textHeader: {},
  inputAdd: {},
});
