import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ResultsList from "../components/ResultsList";
import SearcBar from "../components/SearcBar";
import useResults from "../hooks/useResults";

export default function SearachScreen() {
  const [searchApi, results, errorMessage] = useResults();
  const [term, setTerm] = useState("");
  console.log(results);
  const filterResultsByprice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearcBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <>
          {results.length == 0 ? (
            <></>
          ) : (
            <>
              <ResultsList
                title="Ucuz Restoranlar "
                results={filterResultsByprice("₺")}
              />
              <ResultsList
                title="Uygun  Restoranlar "
                results={filterResultsByprice("₺₺")}
              />
              <ResultsList
                title="Pahalı  Restoranlar "
                results={filterResultsByprice("₺₺₺")}
              />
            </>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
