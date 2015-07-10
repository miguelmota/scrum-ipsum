require 'marky_markov'

markov = MarkyMarkov::TemporaryDictionary.new
markov.parse_file File.dirname(__FILE__) + "/train/phrases.txt"
markov.parse_file File.dirname(__FILE__) + "/train/agile-glossary.txt"
markov.parse_file File.dirname(__FILE__) + "/train/scrumalliance.txt"
puts markov.generate_n_sentences 10
puts markov.generate_n_sentences 10
puts markov.generate_n_sentences 5
markov.clear! # Clear the temporary dictionary.
