describe('when displaying cohort', function() {

    describe ('CohortController', function () {
        beforeEach(module('MakerMix'));

        var ctrl;

        beforeEach(inject(function($controller) {
            ctrl = $controller('CohortController');
        }));

        var cohort = [
            {"id": 1,
                individuals : [
                {
                    "name": "James"
                },
                {
                    "name": "Rich"
                }]
            }
        ];

        it('receives the cohort list', function() {
            expect(ctrl.cohort).toEqual(cohort);
        });

    });

});
