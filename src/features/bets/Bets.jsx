import * as React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FloatingActionButton from "../../components/FloatinActionButton";

const Bets = (props) => {
  // const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        // paddingTop: insets.top,
        // paddingBottom: insets.bottom,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: 8,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          padding: 10,
          width: "80%",
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 8, fontStyle: "italic" }}>
          Dupla
        </Text>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text>Aposta: R$ 100,00</Text>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Text>Retorno: R$ 175,00</Text>
            <View
              style={{
                width: 20,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 90 90"
                style={{
                  display: "block",
                  margin: "auto",
                }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="20"
                  style={{
                    fill: "green",
                  }}
                ></circle>
              </svg>
            </View>
          </View>
        </View>
        <Text style={{ fontSize: 8, color: "blue", fontWeight: "bold" }}>
          Ao clicar no botão expandir o painel exibirá mais detalhes
        </Text>
      </View>
      <View style={{ height: 1, width: "80%", backgroundColor: "darkgray" }} />
      <View
        style={{
          flexDirection: "column",
          padding: 10,
          width: "80%",
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 8, fontStyle: "italic" }}>
          Simples
        </Text>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text>Aposta: R$ 100,00</Text>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Text>Retorno: R$ 0,00</Text>
            <View
              style={{
                width: 20,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 90 90"
                style={{
                  display: "block",
                  margin: "auto",
                }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="20"
                  style={{
                    fill: "red",
                  }}
                ></circle>
              </svg>
            </View>
          </View>
        </View>
      </View>
      <FloatingActionButton onPress={() => console.log("Clicked!")} />
    </View>
  );
};

export default Bets;
