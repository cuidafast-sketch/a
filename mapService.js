import { db } from "./firebaseConfig.js";

// Salvar ponto como GeoPoint
export async function salvarLocal(lat, lng) {
  try {
    await db.collection("locais").add({
      geopoint: new firebase.firestore.GeoPoint(lat, lng),
      criadoEm: firebase.firestore.Timestamp.now()
    });
    console.log("Ponto salvo:", lat, lng);
  } catch (e) {
    console.error("Erro ao salvar:", e);
  }
}

// Buscar todos os pontos
export async function carregarLocais() {
  const snapshot = await db.collection("locais").get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
