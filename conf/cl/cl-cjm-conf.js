// To use this conf:
//
// cd cell-ontology/src/ontology
// owljs-repl -i cl-cjm-conf.js cl-edit.owl
//
// Make sure file is copied to same dir, or add a symlink.
// You can clone this for your own setup

owl.config.idspace = 'CL';
owl.config.lastId = 10000; // CJM
owl.defaultSlotMap = { created_by : "GOC:cjm" }; // todo - dates
owl.config.defaultFormat = new org.semanticweb.owlapi.io.OWLFunctionalSyntaxOntologyFormat(); // todo - introspect this

print("Welcome, CJM");
