import { Topic } from '../../_types';

export const dialoguesTopic: Topic = {
  id: 4,
  name: "Dialogi",
  quizSets: [
    {
      id: 1,
      name: "W restauracji",
      questions: [
        {
          id: 1,
          question: "Jak powiesz 'Can I have the menu, please?' po polsku?",
          options: [
            "Czy mogę prosić o kartę?",
            "Czy mogliby państwo podać menu?",
            "Czy jest dostępna karta dań?",
            "Czy mogę zobaczyć menu?"
          ],
          correctAnswer: 2
        },
        {
          id: 2,
          question: "Jak powiesz 'I would like to order' po polsku?",
          options: [
            "Jestem gotowy do zamówienia",
            "Chciałbym złożyć zamówienie",
            "Mogę prosić o przyjęcie zamówienia",
            "Proszę o możliwość zamówienia"
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "Jak powiesz 'The bill, please' po polsku?",
          options: [
            "Czy mogę otrzymać rachunek",
            "Proszę o rachunek",
            "Chciałbym zapłacić",
            "Poproszę o rachunek"
          ],
          correctAnswer: 3
        },
        {
          id: 4,
          question: "Jak powiesz 'What do you recommend?' po polsku?",
          options: [
            "Jakie są dzisiejsze specjały?",
            "Co jest najpopularniejsze?",
            "Co pan/pani poleca?",
            "Co warto spróbować?"
          ],
          correctAnswer: 2
        },
        {
          id: 5,
          question: "Jak powiesz 'Enjoy your meal' po polsku?",
          options: [
            "Życzę smacznego",
            "Smacznego",
            "Dobrego apetytu",
            "Proszę się delektować posiłkiem"
          ],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 2,
      name: "Dialog w urzędzie",
      questions: [
        {
          id: 1,
          question: "Jak powiesz 'I would like to apply for a residence permit' po polsku?",
          options: [
            "Chciałbym/Chciałabym ubiegać się o kartę pobytu",
            "Chciałbym/Chciałabym złożyć wniosek o kartę pobytu",
            "Chciałbym/Chciałabym rozpocząć procedurę o kartę pobytu",
            "Chciałbym/Chciałabym starać się o kartę pobytu"
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Jak powiesz 'Where can I find the form?' po polsku?",
          options: [
            "Gdzie znajdę odpowiedni formularz?",
            "Skąd mogę pobrać formularz?",
            "Gdzie mogę znaleźć formularz?",
            "W którym miejscu są formularze?"
          ],
          correctAnswer: 2
        },
        {
          id: 3,
          question: "Jak powiesz 'What documents do I need?' po polsku?",
          options: [
            "Które dokumenty są wymagane?",
            "Jakie dokumenty muszę dostarczyć?",
            "Co trzeba przygotować z dokumentów?",
            "Jakie dokumenty są potrzebne?"
          ],
          correctAnswer: 3
        },
        {
          id: 4,
          question: "Jak powiesz 'I need to make an appointment' po polsku?",
          options: [
            "Chciałbym umówić wizytę",
            "Muszę umówić się na wizytę",
            "Potrzebuję terminu wizyty",
            "Proszę o wyznaczenie wizyty"
          ],
          correctAnswer: 1
        },
        {
          id: 5,
          question: "Jak powiesz 'Could you help me fill out this form?' po polsku?",
          options: [
            "Czy mógłby pan/pani pomóc mi z formularzem?",
            "Czy może mi pan/pani asystować przy formularzu?",
            "Czy może mi pan/pani pomóc wypełnić ten formularz?",
            "Czy może pan/pani wytłumaczyć jak wypełnić formularz?"
          ],
          correctAnswer: 2
        }
      ]
    },
    {
      id: 3,
      name: "Kontrola paszportowa",
      questions: [
        {
          id: 1,
          question: "Jak powiesz 'Your passport, please' po polsku?",
          options: [
            "Proszę pokazać paszport",
            "Poproszę paszport",
            "Czy mogę zobaczyć paszport?",
            "Dokumenty do kontroli poproszę"
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Jak powiesz 'What is the purpose of your visit?' po polsku?",
          options: [
            "W jakim celu pan/pani przyjeżdża?",
            "Co sprowadza pana/panią do Polski?",
            "Jaki jest cel pana/pani wizyty?",
            "Dlaczego pan/pani odwiedza Polskę?"
          ],
          correctAnswer: 2
        },
        {
          id: 3,
          question: "Jak powiesz 'How long are you planning to stay?' po polsku?",
          options: [
            "Na jaki okres planuje pan/pani pobyt?",
            "Do kiedy zamierza pan/pani zostać?",
            "Jak długo będzie trwał pana/pani pobyt?",
            "Jak długo planuje pan/pani zostać?"
          ],
          correctAnswer: 3
        },
        {
          id: 4,
          question: "Jak powiesz 'Where will you be staying?' po polsku?",
          options: [
            "Gdzie będzie pan/pani mieszkać?",
            "Gdzie się pan/pani zatrzyma?",
            "Pod jakim adresem będzie pan/pani przebywać?",
            "W jakiej lokalizacji pan/pani się zatrzymuje?"
          ],
          correctAnswer: 1
        },
        {
          id: 5,
          question: "Jak powiesz 'Do you have anything to declare?' po polsku?",
          options: [
            "Czy przewozi pan/pani coś do oclenia?",
            "Czy ma pan/pani coś do oclenia?",
            "Czy deklaruje pan/pani jakieś towary?",
            "Czy musi pan/pani coś zgłosić do odprawy?"
          ],
          correctAnswer: 1
        }
      ]
    }
  ]
};